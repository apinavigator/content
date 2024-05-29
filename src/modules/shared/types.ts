
/* ************************************************************************************************
 *                                           PRE-BUILD                                            *
 ************************************************************************************************ */

/**
 * Raw App
 * The object of an app prior to the build execution.
 */
interface IRawApp {
  name: string;
  version: string;
  subjects: string[]; // Subject IDs - only present in raw objects
}

/**
 * Raw Subject
 * The object of a subject prior to the build execution.
 */
interface IRawSubject {
  name: string;
  topics: string[]; // Topic IDs - only present in raw objects
}

/**
 * Logo Variation
 * Each app should have two logos so the GUI can properly implement light and dark mode.
 */
type ILogoVariation = 'light' | 'dark';





/* ************************************************************************************************
 *                                             BUILD                                              *
 ************************************************************************************************ */

/**
 * Programming Languages
 * The list of programming languages that can be inserted into the content as code snippets.
 */
type IProgrammingLanguages = 'javascript' | 'typescript' | 'html' | 'css';

/**
 * Topic Content Item Kind
 * The kind of content provided by the item. In the case of 'text', the content will be wrapped in
 * a <p>{item.value}</p>. If it is a code snippet, make use of the programming language's name.
 */
type ITopicContentItemKind = 'text' | IProgrammingLanguages;

/**
 * Topic Content Item
 * An individual content item. A topic can contain any number of items.
 */
interface ITopicContentItem {
  // the kind of content
  kind: ITopicContentItemKind;

  // the content
  value: string;
}

/**
 * Topic
 * A topic covers all the necessary information for a single thing. It can be a concept or a method.
 */
interface ITopic {
  // the name of the topic (used by the search engine)
  name: string;

  // an optional larger name that will be displayed in the hover card and the subject dialog
  longName?: string;

  // the description that will be used by the search engine
  description: string;

  // if enabled, the topic has not yet been released to be used in production
  experimental?: boolean;

  // the list of content items
  content: ITopicContentItem[];

  // the list of URLs that contain information about the topic
  sources: string[];
}

/**
 * Subject
 * A container for topics.
 */
interface ISubject {
  // the name of the category being covered
  name: string;

  // the list of topics that comprise the subject
  topics: ITopic[];
}

/**
 * App
 * An application refers to an individual technology, library, framework or programming language.
 */
interface IApp {
  // the identifier of the app. Ensure this value is POSIX compatible and lowercased
  id: string,

  // the name of the app
  name: string;

  // the current version of the app
  version: string;

  // the list of subjects that comprise the app
  subjects: ISubject[];
}





/* ************************************************************************************************
 *                                           APP STORE                                            *
 ************************************************************************************************ */

/**
 * Minified App
 * The minified version of the app that is stored in the App Store object.
 */
interface IMinifiedApp {
  id: string;
  name: string;
  version: string;
}

/**
 * App Store
 * The store's object that contains general information as well as the available apps.
 */
interface IAppStore {
  // the list of applications that can be installed through the GUI
  apps: IMinifiedApp[];
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  // pre-build
  IRawApp,
  IRawSubject,
  ILogoVariation,

  // build
  ITopicContentItemKind,
  ITopicContentItem,
  ITopic,
  ISubject,
  IApp,

  // app store
  IMinifiedApp,
  IAppStore,
};
