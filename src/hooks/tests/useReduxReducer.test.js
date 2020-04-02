import { memoryHistory } from 'react-router-dom';
import { fromJS } from 'immutable';
import { identity } from 'lodash';
import configureStore from '../../configureStore';
import { injectReducer } from '../useReduxReducer';

// Fixtures
const initialState = fromJS({ reduced: 'soon' });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state.set('reduced', action.payload);
    default:
      return state;
  }
};

describe('injectReducer', () => {
  let store;

  beforeEach(() => {
    store = configureStore({}, memoryHistory);
  });

  it("should validate a reducer and reducer's key", () => {
    expect(() => injectReducer(store, '', reducer)).toThrow();
    expect(() => injectReducer(store, 1, reducer)).toThrow();
    expect(() => injectReducer(store, 1, 1)).toThrow();
  });

  it('given a store, it should provide a function to inject a reducer', () => {
    injectReducer(store, 'test', reducer);

    const actual = store.getState().get('test');
    const expected = initialState;

    expect(actual.toJS()).toEqual(expected.toJS());
  });

  it('should not assign reducer if already existing', () => {
    store.replaceReducer = jest.fn();
    injectReducer(store, 'test', reducer);
    injectReducer(store, 'test', reducer);

    expect(store.replaceReducer).toHaveBeenCalledTimes(1);
  });

  it('should assign reducer if different implementation for hot reloading', () => {
    store.replaceReducer = jest.fn();
    injectReducer(store, 'test', reducer);
    injectReducer(store, 'test', identity);

    expect(store.replaceReducer).toHaveBeenCalledTimes(2);
  });
});
