import React from 'react';
import { connect } from 'react-redux';

import RatesWidget from './RatesWidget.jsx';

import { fetchRates } from '../actions/ratesActions';

function mapStateToProps(store) {
  return { rates: store.rates}
}

class App extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchRates());
  }
  render(){
    const ratesListGeneralStyle = {
      fontFamily: 'Helvetica Neue, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
    return (
      <div style={ratesListGeneralStyle}>
        <h1>Cryptocurrencies exchange rates</h1>
        <RatesWidget currency='BTC' currencyNameExtended='Bitcoin' rates={this.props.rates.rates.ratesBTC} />
        <RatesWidget currency='ETH' currencyNameExtended='Ethereum' rates={this.props.rates.rates.ratesETH} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
