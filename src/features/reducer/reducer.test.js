import { describe } from 'riteway';
import { reducer, increment, retrieveCount, getRecentCount } from './reducer';

describe('reducer', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return a valid initial state',
    actual: reducer(),
    expected: {},
  });
});

describe('reducer / increment', async (assert) => {
  const count = {
    id: 0,
    type: 'hit',
    timeStamp: 1586543957992,
    count: 1,
    isValid: true,
  };

  assert({
    given: 'an increment request',
    should: 'increment the count',
    actual: reducer(reducer(), increment(count))[0],
    expected: count,
  });
});

describe('reducer / retrieveCount', async (assert) => {
  const count = {
    id: 0,
    type: 'get',
    timeStamp: 1586543957992,
    count: 1,
    isValid: true,
  };

  assert({
    given: 'a retrieve count request',
    should: 'retrieve the current count',
    actual: reducer(reducer(), retrieveCount(count))[0],
    expected: count,
  });
});

describe('reducer / getRecentCount', async (assert) => {
  const actions = [
    increment({
      id: 0,
      type: 'hit',
      timeStamp: 1586543957992,
      count: 1,
      isValid: true,
    }),
    increment({
      id: 7,
      type: 'hit',
      timeStamp: 1586543957993,
      count: 2,
      isValid: true,
    }),
    increment({
      id: 99,
      type: 'hit',
      timeStamp: 1586543957994,
      count: 3,
      isValid: false,
    }),
  ];

  const state = actions.reduce(reducer, {});

  assert({
    given: 'some counts in state',
    should: 'return the most recent valid count',
    actual: getRecentCount(state),
    expected: 2,
  });
});
