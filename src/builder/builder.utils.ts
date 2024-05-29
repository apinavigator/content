import { getDirectoryElements } from 'fs-utils-sync';
import { encodeError } from 'error-message-utils';
import { ERRORS, RAW_APPS_PATH, IRawApp } from '../shared/index.js';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */


/* ************************************************************************************************
 *                                            HELPERS                                             *
 ************************************************************************************************ */



/**
 * Builds the path for a raw app.
 * @param name
 * @returns string
 */
const __buildRawAppPath = (name: string) => `../apps/${name}/index.js`;

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
 * Scans the raw apps directory, loads and retrieves the existing apps.
 * @returns Promise<IRawApp[]>
 * @throws
 * NO_APPS_WERE_FOUND: if there are no raw apps in the directory
 */
const listRawApps = async (): Promise<IRawApp[]> => {
  const { directories } = getDirectoryElements(RAW_APPS_PATH);
  if (!directories.length) {
    throw new Error(encodeError('The apps directory is empty.', ERRORS.NO_APPS_WERE_FOUND));
  }
  return Promise.all(directories.map((el) => __loadRawApp(el.baseName)));
};




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  listRawApps,
};
