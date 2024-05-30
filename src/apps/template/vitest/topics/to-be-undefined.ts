import { ITopic } from '../../../../modules/shared/types.js';
import { text, typescript } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'toBeUndefined',
  content: [
    text('Opposite of toBeDefined, toBeUndefined asserts that the value is equal to undefined. Useful use case would be to check if function has\'t returned anything.'),

    typescript(`import { expect, test } from 'vitest'

function getApplesFromStock(stock: string) {
  if (stock === 'Bill')
    return 13
}

test("mary doesn't have a stock", () => {
  expect(getApplesFromStock('Mary')).toBeUndefined()
})`),
  ],
  sources: [
    'https://vitest.dev/api/expect.html#tobeundefined',
  ],
});

export default Topic;
