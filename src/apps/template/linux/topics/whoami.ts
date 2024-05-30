import { ITopic } from '../../../../modules/shared/types.js';
import { text, bash } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'whoami',
  content: [
    text('It display the system’s username'),

    bash(`$ whoami
sudheer`),
  ],
  sources: [
    'https://github.com/sudheerj/Linux-cheat-sheet?tab=readme-ov-file#user-information',
  ],
});

export default Topic;
