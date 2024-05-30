import { ITopic } from '../../../../modules/shared/types.js';
import { text, html } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Max-Height',
  content: [
    text('Utilities for setting the maximum height of an element.'),

    html(`<div class="h-96 ...">
  ...
  <div class="h-full max-h-24 ..."></div>
  <div class="h-full max-h-full ..."></div>
</div>`),
  ],
  sources: [
    'https://tailwindcss.com/docs/max-height',
  ],
});

export default Topic;
