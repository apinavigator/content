import { IRawSubject } from '../../../modules/shared/types.js';

const Subject = (): IRawSubject => ({
  name: 'PostgreSQL',
  topics: [
    'create-table',
    'insert',
  ],
});

export default Subject;
