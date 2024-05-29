

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Topic Content Item Kind
 * The kind of content provided by the item. In the case of 'text', the content will be wrapped in
 * a <p>{item.value}</p>. If it is a code snippet, make use of the programming language's name.
 */
type ITopicContentItemKind = 'text' | 'javascript' | 'typescript' | 'html' | 'css';

/**
 * Topic Content Item
 * An individual content item. A topic can contain any number of items.
 */
interface ITopicContentItem {
  // the kind of content
  kind: ITopicContentItemKind,

  // the content
  value: string
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
  content: ITopicContentItem[],

  // the list of URLs that contain information about the topic
  sources: string[]
}

/**
 * Subject
 * A container for topics.
 */
interface ISubject {
  name: string,
  topics: ITopic[]
}

/**
 * App
 * An application refers to an individual technology, library, framework or programming language.
 */
interface IApp {
  name: string,
  version: string,
  subjects: ISubject[]
}




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  ITopicContentItemKind,
  ITopicContentItem,
  ITopic,
  ISubject,
  IApp,
};
