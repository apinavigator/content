import { ITopic } from '../../../../modules/shared/types.js';

const Topic = (): ITopic => ({
  name: 'at',
  longName: 'at(index)',
  description: 'Some super cool description of the topic :)',
  content: [
    { kind: 'text', value: 'This is the topic\'s description.' },
    {
      kind: 'javascript',
      value: `typeof 'Hello' // 'string'

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
      typeof myFunc // 'function'`,
    },
    { kind: 'text', value: 'This is the topic\'s description.' },
    {
      kind: 'javascript',
      value: `let foo = 42; // foo is now a number
      foo = "bar"; // foo is now a string
      foo = true; // foo is now a boolean`,
    },
    { kind: 'text', value: '' },
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
  ],
});

export default Topic;
