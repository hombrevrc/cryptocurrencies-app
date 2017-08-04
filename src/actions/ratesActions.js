import axios from 'axios';

export function fetchRates(){
  return function(dispatch){

    axios.get('https://poloniex.com/public?command=returnTicker')
      .then((response) => {
        dispatch({type: 'FETCH_RATES_FULFILLED', payload: [{currency: 'BTC', exchangeRate: response.data.USDT_BTC.last, exchange: 'Poloniex'}, {currency: 'ETH', exchangeRate: response.data.USDT_ETH.last, exchange: 'Poloniex'}]});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_RATES_REJECTED', payload: err});
      });

      axios.get('https://api.coinbase.com/v2/exchange-rates?currency=USD')
        .then((response) => {
          dispatch({type: 'FETCH_RATES_FULFILLED', payload: [{currency: 'BTC', exchangeRate: (1 / response.data.data.rates.BTC), exchange: 'Coinbase'}, {currency: 'ETH', exchangeRate: (1 / response.data.data.rates.ETH), exchange: 'Coinbase'}]});
        })
        .catch((err) => {
          dispatch({type: 'FETCH_RATES_REJECTED', payload: err});
        });

  };
};
