

/* ************************************************************************************************
 *                                            GLOBALS                                             *
 ************************************************************************************************ */

// the path to the directory that holds the raw apps
const RAW_APPS_PATH: string = 'dist/apps';

// the path to where the content should be placed
const OUTPUT_PATH: string = 'public';

// the path to where the logos are stored
const LOGOS_PATH: string = `${OUTPUT_PATH}/logos`;

// the path to where the built apps are stored
const APPS_PATH: string = `${OUTPUT_PATH}/apps`;

// the name that will be used to save the apps when built
const APP_BUILD_NAME: string = 'index.json';



/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  RAW_APPS_PATH,
  OUTPUT_PATH,
  LOGOS_PATH,
  APPS_PATH,
  APP_BUILD_NAME,
};
