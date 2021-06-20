import { describe } from 'riteway';
import render from 'riteway/render-component';

import Message from './message';

describe('Message', async (assert) => {
  const $ = render(<Message />);

  assert({
    given: 'expected props',
    should: 'render a message',
    actual: $('.message').length,
    expected: 1,
  });
});
