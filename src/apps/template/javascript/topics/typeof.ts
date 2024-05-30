import { ITopic } from '../../../../modules/shared/types.js';
import { javascript, text } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'typeof',
  content: [
    text('The typeof operator returns a string indicating the type of the operand\'s value.'),

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
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
  ],
});

export default Topic;
