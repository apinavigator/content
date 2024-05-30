import { IRawSubject } from '../../../modules/shared/types.js';

const Subject = (): IRawSubject => ({
  name: 'TailwindCSS',
  topics: [
    'responsive-design',
    'width',
    'min-width',
    'max-width',
    'height',
    'min-height',
    'max-height',
    'size',
  ],
});

export default Subject;
