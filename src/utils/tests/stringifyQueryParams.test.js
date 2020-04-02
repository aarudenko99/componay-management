import { Map } from 'immutable';
import stringifyQueryParams from '../stringifyQueryParams';

describe('stringifyQueryParams', () => {
  it('should throw for invalid arguments', () => {
    expect(() => stringifyQueryParams('')).toThrow();
    expect(() => stringifyQueryParams('test')).toThrow();
    expect(() => stringifyQueryParams(1)).toThrow();
    expect(() => stringifyQueryParams([])).toThrow();
  });

  it('returns an empty string when empty arguments are provided', () => {
    expect(stringifyQueryParams()).toEqual('');
    expect(stringifyQueryParams(null)).toEqual('');
    expect(stringifyQueryParams({})).toEqual('');
    expect(stringifyQueryParams(Map())).toEqual('');
  });

  it('returns a string based on the query params Map', () => {
    const input = Map({
      test: 'value1',
      foo: 'bar',
      numberValue: 2,
    });
    const expected = 'test=value1&foo=bar&numberValue=2';
    expect(stringifyQueryParams(input)).toEqual(expected);
  });
});
