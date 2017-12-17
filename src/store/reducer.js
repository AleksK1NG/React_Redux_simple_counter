import * as actionTypes from './actions';

const initialState = {
  name: 'Alexander',
  counter: 0,
  storeResult: []
};

const reducer = (state = initialState, action) => {
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
      case actionTypes.STORE_RESULT:
        return {
          ...state,
          storeResult: state.storeResult.concat({id: new Date(), value: state.counter}),
        }
      case actionTypes.DELETE_RESULT:
        const updatedStoreResult = state.storeResult.filter(result => {
          return result.id !== action.payload
        });
        return {
          ...state,
          storeResult: updatedStoreResult
        }
    default:
      return state;
  }
};

export default reducer; 