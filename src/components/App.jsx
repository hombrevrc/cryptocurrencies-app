import React from 'react';
import { connect } from 'react-redux';

import RatesList from './RatesList.jsx';

import { fetchRates } from '../actions/ratesActions';

function mapStateToProps(store) {
  return { rates: store.rates}
}

class App extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchRates());
  }
  render(){
    return (
      <div>
        <RatesList rates={this.props.rates} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
