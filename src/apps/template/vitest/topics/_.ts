import { ITopic } from '../../../../modules/shared/types.js';
import { text, typescript } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: '',
  longName: '',
  content: [
    text(''),

    typescript(``),
  ],
  sources: [
    '',
  ],
});

export default Topic;
