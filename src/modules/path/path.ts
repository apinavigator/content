

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */

// the path to the directory that holds the raw apps
const RAW_APPS_DIR_PATH: string = 'dist/apps';

// the path where the results of the build should be placed
const OUTPUT_DIR_PATH: string = 'public';

// the path to where the logos are stored
const LOGOS_DIR_PATH: string = `${OUTPUT_DIR_PATH}/logos`;

// the path to where the built apps are stored
const APPS_DIR_PATH: string = `${OUTPUT_DIR_PATH}/apps`;

// the name that will be used to save the apps when built
const APP_BUILD_FILE_NAME: string = 'index.json';




/* ************************************************************************************************
 *                                          MODULE PATHS                                          *
 ************************************************************************************************ */

/**
 * Builds the relative path for a raw app module.
 * @param appID
 * @returns string
 */
const buildRawAppModulePath = (appID: string) => `../../apps/${appID}/index.js`;

/**
 * Builds the relative path for a raw subject module.
 * @param appID
 * @param subjectID
 * @returns string
 */
const buildRawSubjectModulePath = (appID: string, subjectID: string) => `../../apps/${appID}/${subjectID}/index.js`;

/**
 * Builds the path for a topic module.
 * @param appID
 * @param subjectID
 * @param topicID
 * @returns string
 */
const buildTopicModulePath = (appID: string, subjectID: string, topicID: string) => `../../apps/${appID}/${subjectID}/topics/${topicID}.js`;




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // constants
  RAW_APPS_DIR_PATH,
  OUTPUT_DIR_PATH,
  LOGOS_DIR_PATH,
  APPS_DIR_PATH,
  APP_BUILD_FILE_NAME,

  // module paths
  buildRawAppModulePath,
  buildRawSubjectModulePath,
  buildTopicModulePath,
};
