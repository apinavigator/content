import { ITopic } from '../../../../modules/shared/types.js';
import { text, bash } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'ls',
  content: [
    text('The ls command is used to list files or directories. It also accepts some flags or options that changes how files or directories are listed in your terminal.'),

    bash(`# Syntax:
ls [flags] [directory]

# Example:
$ ls
bin dev lib libx32 mnt  

# Listing files & directories with time in a rever order
$ ls -ltr
drwxr-xr-x 2 sj sj 4096 May 14  2020 Videos
drwxr-xr-x 2 sj sj 4096 May 14  2020 Templates
drwxr-xr-x 2 sj sj 4096 May 14  2020 Public

# Home directory
$ ls ~
Desktop    Downloads  Pictures  Sudheer    test   test.txt
Documents  Music      Public    Templates  test1  Videos`),
  ],
  sources: [
    'https://github.com/sudheerj/Linux-cheat-sheet?tab=readme-ov-file#user-information',
  ],
});

export default Topic;
