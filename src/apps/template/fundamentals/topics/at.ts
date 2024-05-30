import { ITopic } from '../../../../modules/shared/types.js';
import { javascript, text } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'at',
  longName: 'at(index)',
  description: 'Some super cool description of the topic :)',
  content: [
    text('This is the topic\'s description.'),

    javascript(`typeof 'Hello' // 'string'

typeof 128 // 'number'
typeof NaN // 'number'

typeof true // 'boolean'

typeof null // 'object'

typeof undefined // 'undefined'

typeof { foo: 'bar' } // 'object'
typeof [0, 1, 2] // 'object'

typeof 1n // 'bigint'

typeof Symbol('test') // 'symbol'

const myFunc = () => { console.log('Hey!') }
typeof myFunc // 'function'`),

    text('This is the topic\'s description.'),

    javascript(`let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean`),

    text('Another super cool description of the topic!'),
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
  ],
});

export default Topic;
