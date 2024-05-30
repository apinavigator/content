import { ITopic } from '../../../../modules/shared/types.js';
import { text, html } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Width',
  content: [
    text('Utilities for setting the width of an element.'),

    html(`<div class="w-96 ...">w-96</div>
<div class="w-80 ...">w-80</div>
<div class="w-64 ...">w-64</div>
<div class="w-48 ...">w-48</div>
<div class="w-40 ...">w-40</div>
<div class="w-32 ...">w-32</div>
<div class="w-24 ...">w-24</div>`),
  ],
  sources: [
    'https://tailwindcss.com/docs/width',
  ],
});

export default Topic;
