import { ITopic } from '../../../../modules/shared/types.js';
import { text, bash } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: '',
  content: [
    text(''),

    bash(``),
  ],
  sources: [
    'https://github.com/sudheerj/Linux-cheat-sheet?tab=readme-ov-file#user-information',
  ],
});

export default Topic;
