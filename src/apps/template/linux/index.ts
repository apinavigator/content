import { IRawSubject } from '../../../modules/shared/types.js';

const Subject = (): IRawSubject => ({
  name: 'Linux',
  topics: [
    'who',
    'whoami',
    'grep',
    'pwd',
    'ls',
  ],
});

export default Subject;
