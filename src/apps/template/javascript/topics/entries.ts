import { ITopic } from '../../../../modules/shared/types.js';
import { javascript, text } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'entries',
  longName: 'Object.entries()',
  content: [
    text('The Object.entries() static method returns an array of a given object\'s own enumerable string-keyed property key-value pairs.'),

    javascript(`const object1 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(\`$ {key}: $ {value}\`);
}

// Expected output:
// "a: somestring"
// "b: 42"`),
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign',
  ],
});

export default Topic;
