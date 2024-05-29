import { describe, test, expect } from 'vitest';
import {
  buildRawAppModulePath,
  buildRawSubjectModulePath,
  buildTopicModulePath,
} from './path.js';

describe('buildRawAppModulePath', () => {
  test('can build a relative path for any raw app module', () => {
    expect(buildRawAppModulePath('javascript')).toBe('../../apps/javascript/index.js');
    expect(buildRawAppModulePath('vitest')).toBe('../../apps/vitest/index.js');
  });
});



describe('buildRawSubjectModulePath', () => {
  test('can build a relative path for any raw subject module', () => {
    expect(buildRawSubjectModulePath('javascript', 'fundamentals')).toBe('../../apps/javascript/fundamentals/index.js');
    expect(buildRawSubjectModulePath('vitest', 'test')).toBe('../../apps/vitest/test/index.js');
  });
});



describe('buildTopicModulePath', () => {
  test('can build a relative path for topic module', () => {
    expect(buildTopicModulePath('javascript', 'fundamentals', 'function')).toBe('../../apps/javascript/fundamentals/topics/function.js');
    expect(buildTopicModulePath('vitest', 'test', 'test-extend')).toBe('../../apps/vitest/test/topics/test-extend.js');
  });
});
