import { ITopic } from '../../../../modules/shared/types.js';
import { text, css } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: '',
  content: [
    text(''),

    css(``),
  ],
  sources: [
    '',
  ],
});

export default Topic;
