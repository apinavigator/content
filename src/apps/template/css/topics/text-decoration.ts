import { ITopic } from '../../../../modules/shared/types.js';
import { text, css } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'text-decoration',
  content: [
    text('The text-decoration shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for text-decoration-line, text-decoration-color, text-decoration-style, and the newer text-decoration-thickness property.'),

    text('Syntax'),
    css(`text-decoration: underline;
text-decoration: overline red;
text-decoration: none;

/* Global values */
text-decoration: inherit;
text-decoration: initial;
text-decoration: revert;
text-decoration: revert-layer;
text-decoration: unset;`),

    text('Example'),

    css(`.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
`),
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration',
  ],
});

export default Topic;
