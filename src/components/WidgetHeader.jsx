import React from 'react';

import Media from 'react-media';

export default class WidgetHeader extends React.Component {
  render(){
    return (
      <Media query={{minWidth: 980}}>
        {matches => matches ? (
          <h3 style={{textAlign: 'center'}}>{this.props.currencyNameExtended} rates</h3>
        ) : (
          <p style={{textAlign: 'center', fontSize: '1.6em'}}>{this.props.currencyNameExtended} rates</p>
        )}
      </Media>
    )
  }
}
