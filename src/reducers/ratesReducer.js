export default function reducer(state = {
  ratesBTC: [],
  ratesETH: [],
  fetching: false,
  fetched: false,
  error: null
}, action){
  switch (action.type) {
    case 'FETCH_RATES':
      return {...state, fetching: true}
      break;
    case 'FETCH_RATES_FULFILLED':
      // console.log(action.payload);
      // const aaa = action.payload.reduce((a, b) => {return a.concat(b)}, []);
      // console.log(aaa);
      state.ratesBTC.push(action.payload[0]);
      state.ratesETH.push(action.payload[1]);
      // state.rates.reduce((a, b) => {return a.concat(b)}, []);
      // state.rates.reduce((a, b) => {return a.concat(b)}, []);
      // state.rates.push(action.payload);
      return {...state, fetching: false, fetched: true}
      break;
    case 'FETCH_RATES_REJECTED':
      return {...state, fetching: false, error: action.payload}
  }
  return state;
};
