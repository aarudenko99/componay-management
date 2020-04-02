import Immutable, { Map } from 'immutable';
import invariant from 'invariant';
import { isPlainObject } from 'lodash';

/**
 * Stringifies an object into a query string.
 * Each property of the object becomes a key/value pair in the query string
 *
 * @param {object} params
 * @return {string}
 */
const stringifyQueryParams = (params = Map()) => {
  invariant(
    params == null || isPlainObject(params) || Immutable.isMap(params),
    '(app/utils...) stringifyQueryParams: Expected `params` to be `null`, an object or an Immutable Map',
  );

  const immutableParams = Map(params);
  if (immutableParams.isEmpty()) return '';
  return immutableParams.map((value, key) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
};

export default stringifyQueryParams;
