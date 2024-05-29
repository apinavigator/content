import { ITopic } from '../../../../shared/types.js';

const Topic = (): ITopic => ({
  name: 'Data Types & Structures',
  description: 'This is a very cool description',
  content: [
    { kind: 'text', value: 'This is the topic\'s description.' },
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
  ],
});

export default Topic;
