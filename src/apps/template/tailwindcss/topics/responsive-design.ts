import { ITopic } from '../../../../modules/shared/types.js';
import { text, css, html } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Responsive Design',
  content: [
    text('Using responsive utility variants to build adaptive user interfaces.'),

    css(`/*sm*/  @media (min-width: 640px) { ... }
/*md*/  @media (min-width: 768px) { ... }
/*lg*/  @media (min-width: 1024px) { ... }
/*xl*/  @media (min-width: 1280px) { ... }
/*2xl*/ @media (min-width: 1536px) { ... }`),

    text('Example'),

    html(`<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">`),
  ],
  sources: [
    'https://tailwindcss.com/docs/responsive-design',
  ],
});

export default Topic;
