import { describe, test, expect } from 'vitest';
import {
  LOGOS_DIR_PATH,
  APPS_DIR_PATH,
  BUILD_FILE_NAME,
  OUTPUT_DIR_PATH,
  buildRawAppModulePath,
  buildRawSubjectModulePath,
  buildTopicModulePath,
  buildLogoFilePath,
  buildAppFilePath,
  buildAppStoreFilePath,
} from './path.js';

/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('Module Paths', () => {
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
});





describe('General Paths', () => {
  describe('buildLogoFilePath', () => {
    test('can build a path for a logo file', () => {
      expect(buildLogoFilePath('javascript', 'light')).toBe(`${LOGOS_DIR_PATH}/javascript/light.png`);
      expect(buildLogoFilePath('python', 'dark')).toBe(`${LOGOS_DIR_PATH}/python/dark.png`);
    });
  });


  describe('buildAppFilePath', () => {
    test('can build a path for a built app', () => {
      expect(buildAppFilePath('javascript')).toBe(`${APPS_DIR_PATH}/javascript/${BUILD_FILE_NAME}`);
      expect(buildAppFilePath('python')).toBe(`${APPS_DIR_PATH}/python/${BUILD_FILE_NAME}`);
    });
  });


  describe('buildAppStoreFilePath', () => {
    test('can build a path for a built app', () => {
      expect(buildAppStoreFilePath()).toBe(`${OUTPUT_DIR_PATH}/${BUILD_FILE_NAME}`);
    });
  });
});
