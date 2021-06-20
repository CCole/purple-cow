import { describe } from 'riteway';
import render from 'riteway/render-component';
import { reducer, increment } from '../reducer/reducer';

import StateWindow from './state-window';

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

describe('StateWindow', async (assert) => {
  const $ = render(<StateWindow state={state} />);

  assert({
    given: 'expected props',
    should: 'render a state window',
    actual: $('.state-window').length,
    expected: 1,
  });
});
