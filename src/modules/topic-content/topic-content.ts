import { IProgrammingLanguage, ITopicContentItem } from '../shared/types.js';

/* ************************************************************************************************
 *                                            GENERAL                                             *
 ************************************************************************************************ */

/**
 * Builds a textual topic content item out of a string.
 * @param value
 * @returns ITopicContentItem
 */
const text = (value: string): ITopicContentItem => ({ kind: 'text', value });





/* ************************************************************************************************
 *                                         CODE SNIPPETS                                          *
 ************************************************************************************************ */

/**
 * Builds a code snippet content item out of a string.
 * @param kind
 * @param value
 * @returns ITopicContentItem
 */
const __code = (kind: IProgrammingLanguage, value: string): ITopicContentItem => ({ kind, value });
const bash = (value: string) => __code('bash', value);
const cmake = (value: string) => __code('cmake', value);
const csharp = (value: string) => __code('csharp', value);
const css = (value: string) => __code('css', value);
const dart = (value: string) => __code('dart', value);
const django = (value: string) => __code('django', value);
const dockerfile = (value: string) => __code('dockerfile', value);
const go = (value: string) => __code('go', value);
const haskell = (value: string) => __code('haskell', value);
const html = (value: string) => __code('html', value);
const http = (value: string) => __code('http', value);
const java = (value: string) => __code('java', value);
const javascript = (value: string) => __code('javascript', value);
const json = (value: string) => __code('json', value);
const latex = (value: string) => __code('latex', value);
const makefile = (value: string) => __code('makefile', value);
const markdown = (value: string) => __code('markdown', value);
const nginx = (value: string) => __code('nginx', value);
const perl = (value: string) => __code('perl', value);
const pgsql = (value: string) => __code('pgsql', value);
const php = (value: string) => __code('php', value);
const plaintext = (value: string) => __code('plaintext', value);
const powershell = (value: string) => __code('powershell', value);
const python = (value: string) => __code('python', value);
const ruby = (value: string) => __code('ruby', value);
const rust = (value: string) => __code('rust', value);
const scss = (value: string) => __code('scss', value);
const shell = (value: string) => __code('shell', value);
const sql = (value: string) => __code('sql', value);
const typescript = (value: string) => __code('typescript', value);
const xml = (value: string) => __code('xml', value);
const yaml = (value: string) => __code('yaml', value);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // general
  text,

  // code snippets
  bash,
  cmake,
  csharp,
  css,
  dart,
  django,
  dockerfile,
  go,
  haskell,
  html,
  http,
  java,
  javascript,
  json,
  latex,
  makefile,
  markdown,
  nginx,
  perl,
  pgsql,
  php,
  plaintext,
  powershell,
  python,
  ruby,
  rust,
  scss,
  shell,
  sql,
  typescript,
  xml,
  yaml,
};
