import { ITopic } from '../../../../modules/shared/types.js';
import { text, bash } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'pwd',
  content: [
    text('The pwd(Present Working Directory) command is used to print the name of the present/current working directory starting from the root.'),

    bash(`$ pwd
/home/sj/Desktop/Linux`),
  ],
  sources: [
    'https://github.com/sudheerj/Linux-cheat-sheet?tab=readme-ov-file#user-information',
  ],
});

export default Topic;
