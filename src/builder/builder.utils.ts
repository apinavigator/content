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
 * Builds the path for a built app.
 * @param name
 * @returns string
 */
const buildAppPath = (name: string) => `${APPS_PATH}/${name}/${APP_BUILD_NAME}`;





/* ************************************************************************************************
 *                                         MISC HELPERS                                           *
 ************************************************************************************************ */

/**
 * Retrieves a raw app module and extracts its values.
 * @param name
 * @returns Promise<IRawApp>
 */
const __loadRawApp = async (name: string): Promise<IRawApp> => {
  const module = await import(__buildRawAppPath(name));
  return module.default();
};

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
};
