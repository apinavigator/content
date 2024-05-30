import { ITopic } from '../../../../modules/shared/types.js';
import { text, css } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'text-align',
  content: [
    text('The text-align CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.'),

    css(`/* Keyword values */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: match-parent;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
`),

    text('Example'),

    css(`.example {
  text-align: start;
  border: solid;
}`),
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align',
  ],
});

export default Topic;
