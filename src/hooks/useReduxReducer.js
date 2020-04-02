import { useContext, useEffect } from 'react';
import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';
import { ReactReduxContext } from 'react-redux';
import createReducer from '../reducers';

const checkKey = (key) => invariant(
  isString(key) && !isEmpty(key),
  '(app/hooks...) useReduxReducer: Expected `key` to be a non empty string',
);

const checkReducer = (reducer) => invariant(
  isFunction(reducer),
  '(app/hooks...) useReduxReducer: Expected `reducer` to be a reducer function',
);

export const injectReducer = (store, key, reducer) => {
  checkKey(key);
  checkReducer(reducer);

  // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
  if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) return;

  store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
  store.replaceReducer(createReducer(store.injectedReducers));
};

/**
 * Injects a slice into the redux store, and a reducer to handle state
 * updates to that slice.
 *
 * @param {string} key Identifier for the slice
 * @param {function} reducer Reducer function
 */
const useReduxReducer = (key, reducer) => {
  const { store } = useContext(ReactReduxContext);

  useEffect(() => {
    injectReducer(store, key, reducer);
  }, [key, reducer, store]);
};

export default useReduxReducer;
