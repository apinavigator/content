import { IRawSubject } from '../../../modules/shared/types.js';

const Subject = (): IRawSubject => ({
  name: 'HTTP',
  topics: [
    'request',
  ],
});

export default Subject;
