/**
 * @typedef {(RESTART_ON_REMOUNT|DAEMON|ONCE_TILL_UNMOUNT)} SAGA_MODE
 */

import { useContext, useEffect } from 'react';
import invariant from 'invariant';
import { conformsTo, isEmpty, isFunction, isString } from 'lodash';
import { ReactReduxContext } from 'react-redux';

export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

const ALLOWED_MODES = [RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT];

const checkKey = (key) => invariant(
  isString(key) && !isEmpty(key),
  '(app/hooks...) useSaga: Expected `key` to be a non empty string',
);

const checkDescriptor = (descriptor) => {
  const shape = {
    saga: isFunction,
    mode: (mode) => isString(mode) && ALLOWED_MODES.includes(mode),
  };
  invariant(
    conformsTo(descriptor, shape),
    '(app/hooks...) useSaga: Expected a valid saga descriptor',
  );
};

export const injectSaga = (store, key, descriptor = {}, args) => {
  const newDescriptor = {
    ...descriptor,
    mode: descriptor.mode || DAEMON,
  };
  const { saga, mode } = newDescriptor;

  checkKey(key);
  checkDescriptor(newDescriptor);

  let hasSaga = Reflect.has(store.injectedSagas, key);

  if (process.env.NODE_ENV !== 'production') {
    const oldDescriptor = store.injectedSagas[key];
    // enable hot reloading of daemon and once-till-unmount sagas
    if (hasSaga && oldDescriptor.saga !== saga) {
      oldDescriptor.task.cancel();
      hasSaga = false;
    }
  }

  if (!hasSaga || (hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT)) {
    /* eslint-disable no-param-reassign */
    store.injectedSagas[key] = {
      ...newDescriptor,
      task: store.runSaga(saga, args),
    };
    /* eslint-enable no-param-reassign */
  }
};

export const ejectSaga = (store, key) => {
  checkKey(key);

  if (!Reflect.has(store.injectedSagas, key)) return;

  const descriptor = store.injectedSagas[key];
  if (descriptor.mode && descriptor.mode !== DAEMON) {
    descriptor.task.cancel();

    // Clean up in production; in development we need `descriptor.saga` for hot reloading
    if (process.env.NODE_ENV === 'production') {
      // Need some value to be able to detect `ONCE_TILL_UNMOUNT` sagas in `injectSaga`
      store.injectedSagas[key] = 'done'; // eslint-disable-line no-param-reassign
    }
  }
};

/**
 * Injects a generator function into a tracked list of sagas at runtime.
 *
 * @param {string} key Identifier for the saga
 * @param {function} saga Generator function
 * @param {SAGA_MODE} mode Descriptor for how the saga will run.
 */
const useSaga = (key, saga, mode) => {
  const { store } = useContext(ReactReduxContext);

  useEffect(() => {
    injectSaga(store, key, { saga, mode });

    return () => {
      ejectSaga(store, key);
    };
  }, [key, mode, saga, store]);
};

export default useSaga;
