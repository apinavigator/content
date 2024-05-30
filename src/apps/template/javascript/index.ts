import { IRawSubject } from '../../../modules/shared/types.js';

const Subject = (): IRawSubject => ({
  name: 'JavaScript',
  topics: [
    'typeof',
    'assign',
    'create',
    'define-properties',
    'entries',
    'freeze',
    'is',
    'keys',
    'map',
  ],
});

export default Subject;
