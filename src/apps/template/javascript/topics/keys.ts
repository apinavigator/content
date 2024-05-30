import { ITopic } from '../../../../modules/shared/types.js';
import { javascript, text } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'keys',
  longName: 'Object.keys()',
  content: [
    text('The Object.keys() static method returns an array of a given object\'s own enumerable string-keyed property names.'),

    javascript(`const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]`),
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is',
  ],
});

export default Topic;
