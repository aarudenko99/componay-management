import { Map } from 'immutable';
import invariant from 'invariant';
import { isString } from 'lodash';

/**
 * Parses a query string into an immutable Map.
 * Each property of the query string becomes a key/value pair.
 *
 * @param {string=} queryString
 * @return {Map}
 */
const parseQueryString = (queryString) => {
  invariant(
    queryString == null || isString(queryString),
    '(app/utils...) parseQueryString: Expected `queryString` to be `null` or a string',
  );

  let qs = queryString;
  if (queryString == null || queryString === '') return Map();
  if (queryString.charAt(0) === '?') qs = qs.slice(1);

  let params = Map();
  qs.split('&').forEach((value) => {
    const v = value.split('=');
    params = params.set(v[0], decodeURIComponent(v[1].replace(/\+/g, ' ')));
  });

  return params;
};

export default parseQueryString;
