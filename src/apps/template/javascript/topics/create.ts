import { ITopic } from '../../../../modules/shared/types.js';
import { javascript, text } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'create',
  longName: 'Object.create()',
  content: [
    text('The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.'),

    javascript(`const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(\`My name is $ {this.name}. Am I human? $ {this.isHuman}\`);
  },
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"`),
  ],
  sources: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign',
  ],
});

export default Topic;
