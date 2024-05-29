import { IRawApp } from '../../modules/shared/types.js';

const App = (): IRawApp => ({
  id: 'typescript',
  name: 'TypeScript',
  version: '1.0.0',
  subjects: [
    'fundamentals',
  ],
});

export default App;
