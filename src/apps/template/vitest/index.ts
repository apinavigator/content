import { IRawSubject } from '../../../modules/shared/types.js';

const Subject = (): IRawSubject => ({
  name: 'Vitest',
  topics: [
    'expect',
    'soft',
    'not',
    'to-be',
    'to-be-close-to',
    'to-be-defined',
    'to-be-undefined',
  ],
});

export default Subject;
