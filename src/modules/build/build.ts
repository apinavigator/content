import { IRawApp } from '../shared/index.js';
import { canAppBeBuilt } from './build.validations.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Runs the build process for a selected app.
 * @param rawApp
 * @returns Promise<void>
 */
const build = async (rawApp: IRawApp): Promise<void> => {
  // ensure the app can be built
  canAppBeBuilt(rawApp);

  // ...
  console.log(rawApp);
};




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  build,
};
