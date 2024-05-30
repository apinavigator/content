import { ITopic } from '../../../../modules/shared/types.js';
import { text, typescript } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'soft',
  longName: 'expect.soft',
  content: [
    text('expect.soft functions similarly to expect, but instead of terminating the test execution upon a failed assertion, it continues running and marks the failure as a test failure. All errors encountered during the test will be displayed until the test is completed.'),

    typescript(`import { expect, test } from 'vitest'

test('expect.soft test', () => {
  expect.soft(1 + 1).toBe(3) // mark the test as fail and continue
  expect.soft(1 + 2).toBe(4) // mark the test as fail and continue
})
// At the end of the test, the above errors will be output.`),
  ],
  sources: [
    'https://vitest.dev/api/expect.html#soft',
  ],
});

export default Topic;
