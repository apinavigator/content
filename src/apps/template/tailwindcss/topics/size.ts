import { ITopic } from '../../../../modules/shared/types.js';
import { text, html } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Size',
  content: [
    text('Utilities for setting the width and height of an element at the same time.'),

    html(`<div class="size-16 ...">size-16</div>
<div class="size-20 ...">size-20</div>
<div class="size-24 ...">size-24</div>
<div class="size-32 ...">size-32</div>
<div class="size-40 ...">size-40</div>`),
  ],
  sources: [
    'https://tailwindcss.com/docs/width',
  ],
});

export default Topic;
