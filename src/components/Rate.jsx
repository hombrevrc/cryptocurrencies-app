import React from 'react';

export default class Rate extends React.Component {
  render(){
    return (
      <div>
        <h4>1 {this.props.currency} = {this.props.exchangeRate} USD ({this.props.market})</h4>
      </div>
    )
  }
}
