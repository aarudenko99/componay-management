import { memoryHistory } from 'react-router-dom';
import { put } from 'redux-saga/effects';
import configureStore from '../../configureStore';
import {
  injectSaga,
  ejectSaga,
  DAEMON,
  ONCE_TILL_UNMOUNT,
  RESTART_ON_REMOUNT,
} from '../useSaga';

function* testSaga() {
  yield put({ type: 'TEST', payload: 'yup' });
}

describe('injectors', () => {
  const originalNodeEnv = process.env.NODE_ENV;
  let store;

  describe('ejectSaga', () => {
    beforeEach(() => {
      store = configureStore({}, memoryHistory);
    });

    it("should validate saga's key", () => {
      expect(() => ejectSaga(store, '')).toThrow();
      expect(() => ejectSaga(store, 1)).toThrow();
    });

    it('should cancel a saga in RESTART_ON_REMOUNT mode', () => {
      const cancel = jest.fn();
      store.injectedSagas.test = { task: { cancel }, mode: RESTART_ON_REMOUNT };
      ejectSaga(store, 'test');

      expect(cancel).toHaveBeenCalled();
    });

    it('should not cancel a daemon saga', () => {
      const cancel = jest.fn();
      store.injectedSagas.test = { task: { cancel }, mode: DAEMON };
      ejectSaga(store, 'test');

      expect(cancel).not.toHaveBeenCalled();
    });

    it('should ignore saga that was not previously injected', () => {
      expect(() => ejectSaga(store, 'test')).not.toThrow();
    });

    it("should remove non daemon saga's descriptor in production", () => {
      process.env.NODE_ENV = 'production';
      injectSaga(store, 'test', { saga: testSaga, mode: RESTART_ON_REMOUNT });
      injectSaga(store, 'test1', { saga: testSaga, mode: ONCE_TILL_UNMOUNT });

      ejectSaga(store, 'test');
      ejectSaga(store, 'test1');

      expect(store.injectedSagas.test).toBe('done');
      expect(store.injectedSagas.test1).toBe('done');
      process.env.NODE_ENV = originalNodeEnv;
    });

    it("should not remove daemon saga's descriptor in production", () => {
      process.env.NODE_ENV = 'production';
      injectSaga(store, 'test', { saga: testSaga, mode: DAEMON });
      ejectSaga(store, 'test');

      expect(store.injectedSagas.test.saga).toBe(testSaga);
      process.env.NODE_ENV = originalNodeEnv;
    });

    it("should not remove daemon saga's descriptor in development", () => {
      injectSaga(store, 'test', { saga: testSaga, mode: DAEMON });
      ejectSaga(store, 'test');

      expect(store.injectedSagas.test.saga).toBe(testSaga);
    });
  });

  describe('injectSaga helper', () => {
    beforeEach(() => {
      store = configureStore({}, memoryHistory);
    });

    it("should validate saga's key", () => {
      expect(() => injectSaga(store, '', { saga: testSaga })).toThrow();
      expect(() => injectSaga(store, 1, { saga: testSaga })).toThrow();
    });

    it("should validate saga's descriptor", () => {
      expect(() => injectSaga(store, 'test')).toThrow();
      expect(() => injectSaga(store, 'test', { saga: 1 })).toThrow();
      expect(() => injectSaga(store, 'test', { saga: testSaga, mode: 'testMode' })).toThrow();
      expect(() => injectSaga(store, 'test', { saga: testSaga, mode: 1 })).toThrow();
      expect(() => injectSaga(store, 'test', { saga: testSaga, mode: RESTART_ON_REMOUNT })).not.toThrow();
      expect(() => injectSaga(store, 'test', { saga: testSaga, mode: DAEMON })).not.toThrow();
      expect(() => injectSaga(store, 'test', { saga: testSaga, mode: ONCE_TILL_UNMOUNT })).not.toThrow();
    });

    it('should pass args to saga.run', () => {
      const args = {};
      store.runSaga = jest.fn();
      injectSaga(store, 'test', { saga: testSaga }, args);

      expect(store.runSaga).toHaveBeenCalledWith(testSaga, args);
    });

    it('should not start daemon and once-till-unmount sagas if were started before', () => {
      store.runSaga = jest.fn();

      injectSaga(store, 'test1', { saga: testSaga, mode: DAEMON });
      injectSaga(store, 'test1', { saga: testSaga, mode: DAEMON });
      injectSaga(store, 'test2', { saga: testSaga, mode: ONCE_TILL_UNMOUNT });
      injectSaga(store, 'test2', { saga: testSaga, mode: ONCE_TILL_UNMOUNT });

      expect(store.runSaga).toHaveBeenCalledTimes(2);
    });

    it('should start any saga that was not started before', () => {
      store.runSaga = jest.fn();

      injectSaga(store, 'test1', { saga: testSaga });
      injectSaga(store, 'test2', { saga: testSaga, mode: DAEMON });
      injectSaga(store, 'test3', { saga: testSaga, mode: ONCE_TILL_UNMOUNT });

      expect(store.runSaga).toHaveBeenCalledTimes(3);
    });

    it('should restart a saga if different implementation for hot reloading', () => {
      const cancel = jest.fn();
      store.injectedSagas.test = { saga: testSaga, task: { cancel } };
      store.runSaga = jest.fn();

      function* testSaga1() {
        yield put({ type: 'TEST', payload: 'yup' });
      }

      injectSaga(store, 'test', { saga: testSaga1 });

      expect(cancel).toHaveBeenCalledTimes(1);
      expect(store.runSaga).toHaveBeenCalledWith(testSaga1, undefined);
    });

    it('should not cancel saga if different implementation in production', () => {
      process.env.NODE_ENV = 'production';
      const cancel = jest.fn();
      store.injectedSagas.test = {
        saga: testSaga,
        task: { cancel },
        mode: RESTART_ON_REMOUNT,
      };

      function* testSaga1() {
        yield put({ type: 'TEST', payload: 'yup' });
      }

      injectSaga(store, 'test', { saga: testSaga1, mode: DAEMON });

      expect(cancel).toHaveBeenCalledTimes(0);
      process.env.NODE_ENV = originalNodeEnv;
    });

    it('should save an entire descriptor in the saga registry', () => {
      injectSaga(store, 'test', { saga: testSaga, foo: 'bar' });
      expect(store.injectedSagas.test.foo).toBe('bar');
    });
  });
});
