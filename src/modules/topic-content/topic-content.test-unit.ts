import { describe, test, expect } from 'vitest';
import { text, html, javascript } from './topic-content.js';

/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('General', () => {
  test('can generate a textual content item', () => {
    expect(text('Hello world!')).toStrictEqual({ kind: 'text', value: 'Hello world!' });
  });
});




describe('Code Snippets', () => {
  test('can generate a code snippet content item for any language', () => {
    expect(html('<p>Hello world!</p>')).toStrictEqual({ kind: 'html', value: '<p>Hello world!</p>' });
    expect(javascript('console.log(\'Hello World!\')')).toStrictEqual({ kind: 'javascript', value: 'console.log(\'Hello World!\')' });
  });
});
