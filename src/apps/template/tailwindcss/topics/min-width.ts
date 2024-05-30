import { ITopic } from '../../../../modules/shared/types.js';
import { text, html } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Min-Width',
  content: [
    text('Utilities for setting the minimum width of an element.'),

    html(`<div class="w-96 ...">
  ...
  <div class="min-w-24 ...">min-w-24</div>
  <div class="min-w-full ...">min-w-full</div>
</div>`),
  ],
  sources: [
    'https://tailwindcss.com/docs/width',
  ],
});

export default Topic;
