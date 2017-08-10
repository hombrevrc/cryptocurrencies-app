import React from 'react';

import Media from 'react-media';

export default class WidgetRates extends React.Component {
  render(){
    const ratesNodes = this.props.rates.map(function(rate, index){
      console.log(rate);
      return (
        <Media query={{minWidth: 415}} key={index}>
          {matches => matches? (
            <h4>1 {rate.currency} = {rate.exchangeRate} USD ({rate.exchange})</h4>
          ) : (
            <h4 style={{fontSize: '1.5em'}}>1 {rate.currency} = {rate.exchangeRate} USD ({rate.exchange})</h4>
          )}
        </Media>
      )
    })
    return (
      <div>
        {ratesNodes}
      </div>
    )
  }
}
