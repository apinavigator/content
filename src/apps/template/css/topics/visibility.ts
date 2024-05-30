import { ITopic } from '../../../../modules/shared/types.js';
import { text, css } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'visibility',
  content: [
    text('The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a <table>.'),

    css(`/* Keyword values */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Global values */
visibility: inherit;
visibility: initial;
visibility: revert;
visibility: revert-layer;
visibility: unset;
`),
    text('Example'),
    css(`.visible {
  visibility: visible;
}

.not-visible {
  visibility: hidden;
}`),
  ],
  sources: [
    '',
  ],
});

export default Topic;
