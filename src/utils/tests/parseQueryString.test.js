import { Map } from 'immutable';
import parseQueryString from '../parseQueryString';

describe('parseQueryString', () => {
  it('should throw for invalid arguments', () => {
    expect(() => parseQueryString({})).toThrow();
    expect(() => parseQueryString({ test: 'test' })).toThrow();
    expect(() => parseQueryString(1)).toThrow();
  });

  it('returns an empty Map when empty arguments are provided', () => {
    expect(parseQueryString('')).toEqual(Map());
    expect(parseQueryString()).toEqual(Map());
    expect(parseQueryString(null)).toEqual(Map());
  });

  it('returns a Map based on the query string', () => {
    const expected = Map({
      test: 'value1',
      foo: 'bar',
      numberValue: '2',
    });
    expect(parseQueryString('?test=value1&foo=bar&numberValue=2')).toEqual(expected);
    expect(parseQueryString('test=value1&foo=bar&numberValue=2')).toEqual(expected);
  });
});
