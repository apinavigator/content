import { ITopic } from '../../../../modules/shared/types.js';
import { text, bash } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'who',
  content: [
    text('It is used to get information about currently logged in user on to system. If you don\'t provide any option or arguments, the command displays the following information for each logged-in user.'),

    bash(`$ who
sudheer :0 2019-08-04 01:21 (:0)`),
  ],
  sources: [
    'https://github.com/sudheerj/Linux-cheat-sheet?tab=readme-ov-file#user-information',
    'https://www.geeksforgeeks.org/linux-commands-cheat-sheet/',
  ],
});

export default Topic;
