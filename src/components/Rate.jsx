import React from 'react';

import Media from 'react-media';

export default class Rate extends React.Component {
  render(){
    return (
      <div>
        <Media query={{minWidth: 415}}>
          {matches => matches? (
            <h4>1 {this.props.currency} = {this.props.exchangeRate} USD ({this.props.market})</h4>
          ) : (
            <h4 style={{fontSize: '1.5em'}}>1 {this.props.currency} = {this.props.exchangeRate} USD ({this.props.market})</h4>
          )}
        </Media>
      </div>
    )
  }
}
