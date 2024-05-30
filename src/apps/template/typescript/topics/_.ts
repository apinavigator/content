import { ITopic } from '../../../../modules/shared/types.js';
import { text, typescript } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: '',
  content: [
    text(''),

    typescript(``),
  ],
  sources: [
    '',
  ],
});

export default Topic;
