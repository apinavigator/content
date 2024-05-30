import { ITopic } from '../../../../modules/shared/types.js';
import { text, bash } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'grep',
  content: [
    text('It is a powerful pattern searching tool to find information about a specific user from the system accounts file: /etc/passwd.'),

    bash(`$ grep -i sj /etc/passwd
sj:x:1000:1000:sj,,,:/home/sj:/bin/bash`),
  ],
  sources: [
    'https://github.com/sudheerj/Linux-cheat-sheet?tab=readme-ov-file#user-information',
  ],
});

export default Topic;
