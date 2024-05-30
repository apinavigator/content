import { ITopic } from '../../../../modules/shared/types.js';
import { text, pgsql } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'INSERT',
  content: [
    text('Inserts new rows into a table. One can insert one or more rows specified by value expressions, or zero or more rows resulting from a query.'),

    text('Insert a single row into table films:'),
    pgsql(`INSERT INTO films VALUES
  ('UA502', 'Bananas', 105, '1971-07-13', 'Comedy', '82 minutes');`),

    text('To insert multiple rows using the multirow VALUES syntax:'),
    pgsql(`INSERT INTO films (code, title, did, date_prod, kind) VALUES
  ('B6717', 'Tampopo', 110, '1985-02-10', 'Comedy'),
  ('HG120', 'The Dinner Game', 140, DEFAULT, 'Comedy');`),
  ],
  sources: [
    'https://www.postgresql.org/docs/current/sql-insert.html',
  ],
});

export default Topic;
