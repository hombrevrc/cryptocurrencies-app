import React from 'react';

import WidgetHeader from './WidgetHeader.jsx';
import WidgetLogo from './WidgetLogo.jsx';
import WidgetRates from './WidgetRates.jsx';

export default class RatesWidget extends React.Component {
  render(){
    if(this.props.rates === []) {
      return (<div></div>)
    }
    else {
      const backgroundImg = require('./background.png');
      const individualCurrencyDivStyle = {
        backgroundImage: 'url(' + backgroundImg + ')',
        backgroundSize: 'cover',
        padding: '5px 10px 10px 10px',
        marginBottom: '30px',
        boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)' //box-shadow property taken from Material Components for Web - Card component
      }
      return (
        <div style={individualCurrencyDivStyle}>
          <WidgetHeader currencyNameExtended={this.props.currencyNameExtended} />
          <WidgetLogo currency={this.props.currency} />
          <WidgetRates currency={this.props.currency} rates={this.props.rates} />
        </div>
      )
    }
  }
}
