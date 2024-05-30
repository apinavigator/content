import { ITopic } from '../../../../modules/shared/types.js';
import { text, typescript } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'toBe',
  content: [
    text('toBe can be used to assert if primitives are equal or that objects share the same reference. It is equivalent of calling expect(Object.is(3, 3)).toBe(true). If the objects are not the same, but you want to check if their structures are identical, you can use toEqual.'),

    typescript(`import { expect, test } from 'vitest'

const stock = {
  type: 'apples',
  count: 13,
}

test('stock has 13 apples', () => {
  expect(stock.type).toBe('apples')
  expect(stock.count).toBe(13)
})

test('stocks are the same', () => {
  const refStock = stock // same reference

  expect(stock).toBe(refStock)
})`),
  ],
  sources: [
    'https://vitest.dev/api/expect.html#tobe',
  ],
});

export default Topic;
