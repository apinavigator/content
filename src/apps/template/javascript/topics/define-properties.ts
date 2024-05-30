import { ITopic } from '../../../../modules/shared/types.js';
import { javascript, text } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'defineProperties',
  longName: 'Object.defineProperties()',
  content: [
    text('The Object.defineProperties() static method defines new or modifies existing properties directly on an object, returning the object.'),

    javascript(`const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42`),
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties',
  ],
});

export default Topic;
