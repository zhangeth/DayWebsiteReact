// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Source, Author, Article } = initSchema(schema);

export {
  Source,
  Author,
  Article
};