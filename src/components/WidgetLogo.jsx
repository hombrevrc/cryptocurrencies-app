import React from 'react';

export default class WidgetLogo extends React.Component {
  render(){
    const logoStyle = {
      width: '380px'
    }
    const logoDisplay = (() => {
      if (this.props.currency === 'BTC') {
        return (
          <img src={require('./Bitcoin_logo.svg')} alt='Bitcoin logo' style={logoStyle} />
        );
      } else if (this.props.currency === 'ETH') {
        return (
          <div>
            <img src={require('./Ethereum.png')} alt='Ethereum logo' style={logoStyle} />
            <a style={{display:'block', fontStyle:'italic', textDecoration:'none', color: 'inherit', fontSize:'0.8em', paddingBottom:'5px'}} href='https://ethereum.org/assets'>CC BY 3.0 Ethereum Foundation</a>
          </div>
        );
      }
    })
    return (
      <div>
        {logoDisplay()}
      </div>
    )
  }
}
