import { ITopic } from '../../../../modules/shared/types.js';
import { text, html } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Max-Width',
  content: [
    text('Utilities for setting the maximum width of an element.'),

    html(`<div>
  <div class="w-full max-w-96 ...">max-w-96</div>
  ...
  <div class="w-full max-w-24 ...">max-w-24</div>
</div>`),
  ],
  sources: [
    'https://tailwindcss.com/docs/width',
  ],
});

export default Topic;
