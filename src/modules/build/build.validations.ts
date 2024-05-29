import { encodeError } from 'error-message-utils';
import { isFile } from 'fs-utils-sync';
import { ERRORS, IRawApp } from '../shared/index.js';
import { buildAppFilePath } from '../path/index.js';
import { logoExists, getApp } from './build.utils.js';


/* ************************************************************************************************
 *                                          PRE-BUILD                                             *
 ************************************************************************************************ */

/**
 * Verifies if both light and dark logos exist in the correct path.
 * @param appID
 * @throws
 * - APP_IS_MISSING_LOGO: if either of the logos is missing
 */
const __logosExist = (appID: string): void => {
  if (!logoExists(appID, 'light') || !logoExists(appID, 'dark')) {
    throw new Error(encodeError(`The app '${appID}' is missing the light and/or dark logo. Create the 'public/logos/${appID}' directory and place both logos in it (light.png & dark.png).`, ERRORS.APP_IS_MISSING_LOGO));
  }
};

/**
 * Checks if the app has already been built in the past. If so, it ensures the new build corresponds
 * to a new version.
 * @param raw
 * @throws
 * - OVERRIDING_SAME_APP_VERSION: if the version set in the raw app has already been built
 */
const __isBuildingDifferentVersion = (raw: IRawApp): void => {
  if (isFile(buildAppFilePath(raw.id))) {
    if (raw.version === getApp(raw.id).version) {
      throw new Error(encodeError(`The version '${raw.version}' for ${raw.id} has already been built.`, ERRORS.OVERRIDING_SAME_APP_VERSION));
    }
  }
};

/**
 * Checks if the raw app has a valid list of subjects to build.
 * @param subjectIDs
 * @throws
 * - APP_HAS_NO_SUBJECTS: if the app has no subjects
 */
const __canSubjectsBeBuilt = (subjectIDs: string[]): void => {
  if (!Array.isArray(subjectIDs) || !subjectIDs.length) {
    throw new Error(encodeError('The raw app object does not contain a list of valid subjects.', ERRORS.APP_HAS_NO_SUBJECTS));
  }
};

/**
 * Checks if an app meets all the requirements to be built.
 * @param raw
 * @throws
 * - APP_IS_MISSING_LOGO: if either of the logos is missing
 * - OVERRIDING_SAME_APP_VERSION: if the version set in the raw app has already been built
 * - APP_HAS_NO_SUBJECTS: if the app has no subjects
 */
const canAppBeBuilt = (raw: IRawApp): void => {
  // ensure both logos exist
  __logosExist(raw.id);

  // ensure it isn't building the same version
  __isBuildingDifferentVersion(raw);

  // ensure the subjects are valid
  __canSubjectsBeBuilt(raw.subjects);
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // pre-build
  canAppBeBuilt,
};
