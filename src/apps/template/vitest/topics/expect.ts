import { ITopic } from '../../../../modules/shared/types.js';
import { text, typescript } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'expect',
  content: [
    text('expect is used to create assertions. In this context assertions are functions that can be called to assert a statement. Vitest provides chai assertions by default and also Jest compatible assertions build on top of chai.'),

    typescript(`import { expect } from 'vitest'

const input = Math.sqrt(4)

expect(input).to.equal(2) // chai API
expect(input).toBe(2) // jest API`),
  ],
  sources: [
    'https://vitest.dev/api/expect.html#expect',
  ],
});

export default Topic;
