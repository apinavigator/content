import { ITopic } from '../../../../modules/shared/types.js';
import { text, typescript } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Functions',
  content: [
    text('Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.'),

    text('Parameter Type Annotations'),
    typescript(`function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}`),

    text('Return Type Annotations'),
    typescript(`function getFavoriteNumber(): number {
  return 26;
}`),

    text('Functions Which Return Promises'),
    typescript(`async function getFavoriteNumber(): Promise<number> {
  return 26;
}`),
  ],
  sources: [
    '',
  ],
});

export default Topic;
