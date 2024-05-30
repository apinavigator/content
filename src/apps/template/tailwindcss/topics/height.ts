import { ITopic } from '../../../../modules/shared/types.js';
import { text, html } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Height',
  content: [
    text('Utilities for setting the height of an element.'),

    html(`<div class="h-96 ...">h-96</div>
...
<div class="h-24 ..."></div>`),
  ],
  sources: [
    'https://tailwindcss.com/docs/height',
  ],
});

export default Topic;
