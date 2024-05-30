import { ITopic } from '../../../../modules/shared/types.js';
import { text, html } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Min-Height',
  content: [
    text('Utilities for setting the minimum height of an element.'),

    html(`<div class="h-96 ...">
  ...
  <div class="min-h-24 ...">min-h-24</div>
  <div class="min-h-full ...">min-h-full</div>
</div>`),
  ],
  sources: [
    'https://tailwindcss.com/docs/min-height',
  ],
});

export default Topic;
