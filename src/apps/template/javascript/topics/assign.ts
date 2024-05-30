import { ITopic } from '../../../../modules/shared/types.js';
import { javascript, text } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'assign',
  longName: 'Object.assign()',
  content: [
    text('The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.'),

    javascript(`const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true`),
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign',
  ],
});

export default Topic;
