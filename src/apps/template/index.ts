import { IRawApp } from '../../modules/shared/types.js';

const App = (): IRawApp => ({
  id: 'template',
  name: 'Template',
  version: '1.0.0',
  subjects: [
    'fundamentals',
  ],
});

export default App;
