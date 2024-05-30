import { loadRawSubjectModule, loadTopicModule } from '../module-loader/module-loader.js';
import { IApp, IRawApp, ISubject } from '../shared/index.js';
import { saveApp } from './build.utils.js';
import { canAppBeBuilt } from './build.validations.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Loads the raw subject module and builds it as well as all the topics.
 * @param appID
 * @param subjectID
 * @returns Promise<ISubject>
 */
const __buildSubject = async (appID: string, subjectID: string): Promise<ISubject> => {
  const rawSubject = await loadRawSubjectModule(appID, subjectID);
  return {
    name: rawSubject.name,
    topics: await Promise.all(rawSubject.topics.map(
      (topicID) => loadTopicModule(appID, subjectID, topicID),
    )),
  };
};

/**
 * Builds an app and all its subjects.
 * @param rawApp
 * @returns Promise<IApp>
 */
const __buildApp = async (rawApp: IRawApp): Promise<IApp> => ({
  id: rawApp.id,
  name: rawApp.name,
  version: rawApp.version,
  subjects: await Promise.all(rawApp.subjects.map(
    (subjectID) => __buildSubject(rawApp.id, subjectID),
  )),
});

/**
 * Runs the build process for a selected app.
 * @param rawApp
 * @returns Promise<void>
 */
const build = async (rawApp: IRawApp): Promise<void> => {
  // ensure the app can be built
  canAppBeBuilt(rawApp);

  // generate the build and store it
  const app = await __buildApp(rawApp);
  saveApp(app);

  // update or generate the app store file
  // @TODO
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  build,
};
