import { ITopic } from '../../../../modules/shared/types.js';
import { text } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Data Types & Structures',
  description: 'This is a very cool description',
  content: [
    text('This is the topic\'s description.'),
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
  ],
});

export default Topic;
