export default function reducer(state = {
  rates: {ratesBTC: [], ratesETH: []},
  fetching: false,
  fetched: false,
  error: null
}, action){
  switch (action.type) {
    case 'FETCH_RATES':
      return {...state, fetching: true}
      break;
    case 'FETCH_RATES_FULFILLED':
      state.rates.ratesBTC.push(action.payload[0]);
      state.rates.ratesETH.push(action.payload[1]);
      return {...state, fetching: false, fetched: true}
      break;
    case 'FETCH_RATES_REJECTED':
      return {...state, fetching: false, error: action.payload}
  }
  return state;
};
