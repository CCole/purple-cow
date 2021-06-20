import { describe } from 'riteway';
import render from 'riteway/render-component';

import PrimaryButton from './primary-button';

describe('PrimaryButton', async (assert) => {
  const $ = render(<PrimaryButton />);

  assert({
    given: 'expected props',
    should: 'render a primary button',
    actual: $('.btn.btn--primary').length,
    expected: 1,
  });
});
