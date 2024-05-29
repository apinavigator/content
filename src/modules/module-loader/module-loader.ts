import { IRawApp, IRawSubject, ITopic } from '../shared/types.js';
import { buildRawAppModulePath, buildRawSubjectModulePath, buildTopicModulePath } from '../path/path.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Loads a ES6 module located at a given path and returns its contents.
 * @param path
 * @returns Promise<any>
 */
const __load = async (path: string): Promise<any> => {
  const module = await import(path);
  return module.default();
};

/**
 * Loads and returns the contents of a raw app's module.
 * @param appID
 * @returns Promise<IRawApp>
 */
const loadRawAppModule = (appID: string): Promise<IRawApp> => __load(buildRawAppModulePath(appID));

/**
 * Loads and returns the contents of a raw subject's module.
 * @param appID
 * @param subjectID
 * @returns Promise<IRawSubject>
 */
const loadRawSubjectModule = (
  appID: string,
  subjectID: string,
): Promise<IRawSubject> => __load(buildRawSubjectModulePath(appID, subjectID));

/**
 * Loads and returns the contents of a topic's module.
 * @param appID
 * @param subjectID
 * @param topicID
 * @returns Promise<ITopic>
 */
const loadTopicModule = (
  appID: string,
  subjectID: string,
  topicID: string,
): Promise<ITopic> => __load(buildTopicModulePath(appID, subjectID, topicID));





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // implementation
  loadRawAppModule,
  loadRawSubjectModule,
  loadTopicModule,
};
