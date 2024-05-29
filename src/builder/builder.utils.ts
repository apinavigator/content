import { encodeError } from 'error-message-utils';
import { getDirectoryElements, isFile, readJSONFile } from 'fs-utils-sync';
import {
  ERRORS,
  RAW_APPS_PATH,
  LOGOS_PATH,
  IRawApp,
  ILogoVariation,
  APPS_PATH,
  APP_BUILD_NAME,
  IApp,
  IRawSubject,
  ITopic,
} from '../shared/index.js';

/* ************************************************************************************************
 *                                         PATH HELPERS                                           *
 ************************************************************************************************ */

/**
 * Builds the path for a given app and logo variation.
 * @param appName
 * @param logoVariation
 * @returns string
 */
const __buildLogoPath = (appName: string, logoVariation: ILogoVariation): string => `${LOGOS_PATH}/${appName}/${logoVariation}.png`;

/**
 * Builds the path for a raw app.
 * @param name
 * @returns string
 */
const __buildRawAppPath = (name: string) => `../apps/${name}/index.js`;

/**
 * Builds the path for a raw subject.
 * @param appName
 * @param subjectName
 * @returns string
 */
const __buildRawSubjectPath = (appName: string, subjectName: string) => `../apps/${appName}/${subjectName}/index.js`;

/**
 * Builds the path for a given topic.
 * @param appName
 * @param subjectName
 * @param topicName
 * @returns string
 */
const __buildTopicPath = (appName: string, subjectName: string, topicName: string) => `../apps/${appName}/${subjectName}/topics/${topicName}.js`;

/**
 * Builds the path for a built app.
 * @param name
 * @returns string
 */
const buildAppPath = (name: string) => `${APPS_PATH}/${name}/${APP_BUILD_NAME}`;





/* ************************************************************************************************
 *                                         MISC HELPERS                                           *
 ************************************************************************************************ */

/**
 * Loads a ES6 module located at a given path and returns its contents.
 * @param path
 * @returns Promise<any>
 */
const __loadModule = async (path: string): Promise<any> => {
  const module = await import(path);
  return module.default();
};

/**
 * Retrieves a raw app module and extracts its values.
 * @param name
 * @returns Promise<IRawApp>
 */
const __loadRawApp = (name: string): Promise<IRawApp> => __loadModule(__buildRawAppPath(name));

/**
 * Verifies if a logo variation exists for a given app.
 * @param appName
 * @param logoVariation
 * @returns boolean
 */
const logoExists = (
  appName: string,
  logoVariation: ILogoVariation,
): boolean => isFile(__buildLogoPath(appName, logoVariation));





/* ************************************************************************************************
 *                                           RETRIEVERS                                           *
 ************************************************************************************************ */

/**
 * Scans the raw apps directory, loads and retrieves the existing apps.
 * @returns Promise<IRawApp[]>
 * @throws
 * - NO_APPS_WERE_FOUND: if there are no raw apps in the directory
 */
const listRawApps = async (): Promise<IRawApp[]> => {
  const { directories } = getDirectoryElements(RAW_APPS_PATH);
  if (!directories.length) {
    throw new Error(encodeError('The apps directory is empty.', ERRORS.NO_APPS_WERE_FOUND));
  }
  return Promise.all(directories.map((el) => __loadRawApp(el.baseName)));
};

/**
 * Retrieves a processed app object.
 * @param name
 * @returns IApp
 * @throws
 * - NOT_A_FILE: if the path is not recognized by the OS as a file or if it doesn't exist
 * - FILE_CONTENT_IS_EMPTY_OR_INVALID: if the content of the file is empty or invalid
 * - FILE_CONTENT_IS_EMPTY_OR_INVALID: if the file's JSON content cannot be parsed
 */
const getApp = (name: string): IApp => <IApp>readJSONFile(buildAppPath(name));





/* ************************************************************************************************
 *                                        BUILD RETRIEVERS                                        *
 ************************************************************************************************ */

/**
 * Loads a raw subject module and retrieves its contents.
 * @param appName
 * @param subjectName
 * @returns Promise<IRawSubject>
 */
const loadRawSubject = (
  appName: string,
  subjectName: string,
): Promise<IRawSubject> => __loadModule(__buildRawSubjectPath(appName, subjectName));

/**
 * Loads a topic module and retrieves its contents.
 * @param appName
 * @param subjectName
 * @param topicName
 * @returns Promise<ITopic>
 */
const loadTopic = (
  appName: string,
  subjectName: string,
  topicName: string,
): Promise<ITopic> => __loadModule(__buildTopicPath(appName, subjectName, topicName));



/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // path helpers
  buildAppPath,

  // misc helpers
  logoExists,

  // retrievers
  listRawApps,
  getApp,

  // build retrievers
  loadRawSubject,
  loadTopic,
};
