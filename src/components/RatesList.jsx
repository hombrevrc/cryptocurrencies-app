import React from 'react';

import Rate from './Rate.jsx';

export default class RatesList extends React.Component {
  render(){
    if(this.props.rates.ratesBTC.length === 0 && this.props.rates.ratesETH.length === 0) {
      return (<div></div>)
    }
    else {
      const ratesBTCNodes = this.props.rates.ratesBTC.map(function(rate, index){
        return (
          <Rate currency={rate.currency} exchangeRate={rate.exchangeRate} market={rate.exchange} key={index} />
        )
      });
      const ratesETHNodes = this.props.rates.ratesETH.map(function(rate, index){
        return (
          <Rate currency={rate.currency} exchangeRate={rate.exchangeRate} market={rate.exchange} key={index} />
        )
      });
      const ratesListGeneralStyle = {
        fontFamily: 'Helvetica Neue, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
      const logoStyle = {
        width: '380px'
      }
      const backgroundImg = require('./background.png');
      const individualCurrencyDivStyle = {
        backgroundImage: 'url(' + backgroundImg + ')',
        backgroundSize: 'cover',
        padding: '5px 10px 10px 10px',
        marginBottom: '30px',
        boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)' //box-shadow property taken from Material Components for Web - Card component
      }
      return (
        <div style={ratesListGeneralStyle}>
          <h1>Cryptocurrencies exchange rates</h1>
          <div style={individualCurrencyDivStyle}>
            <h2 style={{textAlign: 'center'}}>Bitcoin rates</h2>
            <img src={require('./Bitcoin_logo.svg')} alt='Bitcoin logo' style={logoStyle} />
            {ratesBTCNodes}
          </div>
          <div style={individualCurrencyDivStyle}>
            <h2 style={{textAlign: 'center'}}>Ethereum rates</h2>
            <img src={require('./Ethereum.png')} alt='Ethereum logo' style={logoStyle} />
            <a style={{display:'block', fontStyle:'italic', textDecoration:'none', color: 'inherit', fontSize:'0.8em', paddingBottom:'5px'}} href='https://ethereum.org/assets'>CC BY 3.0 Ethereum Foundation</a>
            {ratesETHNodes}
          </div>
        </div>
      )
    }
  }
}
