import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';

const createRootReducer = (injectedReducers = {}) => {
  return combineReducers({
    global: () => Map(),
    ...injectedReducers,
  });
};

export default createRootReducer;
