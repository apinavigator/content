import { ITopic } from '../../../../modules/shared/types.js';
import { text, typescript } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'toBeDefined',
  content: [
    text('toBeDefined asserts that the value is not equal to undefined. Useful use case would be to check if function returned anything.'),

    typescript(`import { expect, test } from 'vitest'

function getApples() {
  return 3
}

test('function returned something', () => {
  expect(getApples()).toBeDefined()
})`),
  ],
  sources: [
    'https://vitest.dev/api/expect.html#tobedefined',
  ],
});

export default Topic;
