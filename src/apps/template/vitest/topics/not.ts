import { ITopic } from '../../../../modules/shared/types.js';
import { text, typescript } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'not',
  content: [
    text('Using not will negate the assertion. For example, this code asserts that an input value is not equal to 2. If it\'s equal, the assertion will throw an error, and the test will fail.'),

    typescript(`import { expect, test } from 'vitest'

const input = Math.sqrt(16)

expect(input).not.to.equal(2) // chai API
expect(input).not.toBe(2) // jest API`),
  ],
  sources: [
    'https://vitest.dev/api/expect.html#not',
  ],
});

export default Topic;
