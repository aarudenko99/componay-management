import action from '../action';

describe('action', () => {
  it('should return an object with type and payload', () => {
    const type = 'TEST-TYPE';
    const response = 'testresponse';
    const expected = { type, response };
    const actual = action(type, { response });

    expect(actual).toEqual(expected);
  });

  it('should use a default empty payload if one is not provided', () => {
    const type = 'TEST-TYPE';
    const expected = { type };
    const actual = action(type);

    expect(actual).toEqual(expected);
  });
});
