import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  name: 'Alexander',
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.INC_COUNTER:
      return {
        ...state,
        counter: state.counter += 1,
      }
    case actionTypes.SUB_COUNTER:
      return {
        ...state,
        counter: state.counter -= 1,
      }
    case actionTypes.PLUS_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload,
        name: action.name,
      }
    case actionTypes.MINUS_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload.counter,
        name: action.payload.name,
      }
    default:
      return state;
  }
};

export default counter; 