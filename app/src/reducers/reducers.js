import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

// Reducer template
export const loading = (loading=false, action) => {
  switch (action.type) {
    case types.LOADING:
      return action.payload;
  
    default:
      return loading;
  }
}

export const error = (error=null, action) => {
  switch (action.type) {
    case types.ERROR:
      return action.payload;
  
    default:
      return error;
  }
}

// Combine all reducers into single one
const rootReducer = combineReducers({
  loading,
  error,
// enter all reduces here
});

export default rootReducer;