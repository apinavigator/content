import { ITopic } from '../../../../modules/shared/types.js';
import { text, pgsql } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: '',
  content: [
    text(''),

    pgsql(``),
  ],
  sources: [
    '',
  ],
});

export default Topic;
