import { ITopic } from '../../../../modules/shared/types.js';
import { javascript, text } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'freeze',
  longName: 'Object.freeze()',
  content: [
    text('The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object\'s prototype cannot be re-assigned. freeze() returns the same object that was passed in.'),

    javascript(`const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42`),
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze',
  ],
});

export default Topic;
