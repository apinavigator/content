import { ITopic } from '../../../../modules/shared/types.js';
import { text, pgsql } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'CREATE TABLE',
  content: [
    text('CREATE TABLE will create a new, initially empty table in the current database. The table will be owned by the user issuing the command.'),

    pgsql(`CREATE TABLE films (
  code        char(5) CONSTRAINT firstkey PRIMARY KEY,
  title       varchar(40) NOT NULL,
  did         integer NOT NULL,
  date_prod   date,
  kind        varchar(10),
  len         interval hour to minute
);

CREATE TABLE distributors (
  did    integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name   varchar(40) NOT NULL CHECK (name <> '')
);`),
  ],
  sources: [
    'https://www.postgresql.org/docs/current/sql-createtable.html',
  ],
});

export default Topic;
