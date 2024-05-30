import { ITopic } from '../../../../modules/shared/types.js';
import { text, typescript } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'any',
  content: [
    text('TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.'),

    typescript(`let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using \`any\` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;`),
  ],
  sources: [
    'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any',
  ],
});

export default Topic;
