import { createBrowserHistory } from 'history';

jest.mock('history', () => ({
  createBrowserHistory: jest.fn(),
}));

describe('history util', () => {
  it('loads', () => {
    createBrowserHistory.mockReturnValueOnce('test');
    const history = require('../history').default; // eslint-disable-line
    expect(createBrowserHistory).toHaveBeenCalled();
    expect(history).toEqual('test');
  });
});
