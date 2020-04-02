import { createStore, applyMiddleware, compose } from 'redux';
import Immutable, { Map } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const reduxDevtoolsOptions = {
    serialize: {
      immutable: Immutable,
    },
  };

  // If Redux DevTools extension is installed then use it, otherwise use redux compose
  const composeEnhancers = process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(reduxDevtoolsOptions)
    : compose;

  const store = createStore(
    createRootReducer(),
    Map(),
    composeEnhancers(...enhancers),
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(store.injectedReducers));
    });
  }

  return store;
};

export default configureStore;
