import { encodeError } from 'error-message-utils';
import {
  getDirectoryElements,
  isFile,
  readJSONFile,
  writeJSONFile,
} from 'fs-utils-sync';
import {
  ERRORS,
  IApp,
  ILogoVariation,
  IRawApp,
} from '../shared/index.js';
import {
  RAW_APPS_DIR_PATH,
  buildAppFilePath,
  buildLogoFilePath,
} from '../path/index.js';
import { loadRawAppModule } from '../module-loader/index.js';

/* ************************************************************************************************
 *                                         MISC HELPERS                                           *
 ************************************************************************************************ */

/**
 * Verifies if a logo variation exists for a given app.
 * @param appID
 * @param variation
 * @returns boolean
 */
const logoExists = (
  appID: string,
  variation: ILogoVariation,
): boolean => isFile(buildLogoFilePath(appID, variation));





/* ************************************************************************************************
 *                                           RETRIEVERS                                           *
 ************************************************************************************************ */

/**
 * Scans the raw apps directory, loads and retrieves the existing raw apps.
 * @returns Promise<IRawApp[]>
 * @throws
 * - NO_APPS_WERE_FOUND: if there are no raw apps in the directory
 */
const getRawApps = async (): Promise<IRawApp[]> => {
  const { directories } = getDirectoryElements(RAW_APPS_DIR_PATH);
  if (!directories.length) {
    throw new Error(encodeError('The apps directory is empty.', ERRORS.NO_APPS_WERE_FOUND));
  }
  return Promise.all(directories.map((el) => loadRawAppModule(el.baseName)));
};

/**
 * Retrieves a processed app object.
 * @param appID
 * @returns IApp
 * @throws
 * - NOT_A_FILE: if the path is not recognized by the OS as a file or if it doesn't exist
 * - FILE_CONTENT_IS_EMPTY_OR_INVALID: if the content of the file is empty or invalid
 * - FILE_CONTENT_IS_EMPTY_OR_INVALID: if the file's JSON content cannot be parsed
 */
const getApp = (appID: string): IApp => <IApp>readJSONFile(buildAppFilePath(appID));





/* ************************************************************************************************
 *                                            ACTIONS                                             *
 ************************************************************************************************ */

/**
 * Saves a given app into the output directory.
 * @param app
 */
const saveApp = (app: IApp): void => writeJSONFile(buildAppFilePath(app.id), app, 0);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // misc helpers
  logoExists,

  // retrievers
  getRawApps,
  getApp,

  // actions
  saveApp,
};
