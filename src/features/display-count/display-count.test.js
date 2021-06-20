import { describe } from 'riteway';
import render from 'riteway/render-component';

import DisplayCount from './display-count';

describe('DisplayCount', async (assert) => {
  const $ = render(<DisplayCount count={7} />);

  assert({
    given: 'expected props',
    should: 'render a display container',
    actual: $('.display').length,
    expected: 1,
  });

  assert({
    given: 'expected props',
    should: 'render a display count',
    actual: $('.display__count').length,
    expected: 1,
  });

  assert({
    given: 'some number ',
    should: 'render the number',
    actual: /7/.test($('.display__count').html()),
    expected: true,
  });
});
