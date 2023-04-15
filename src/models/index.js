// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AuthorModel, ArticleModel } = initSchema(schema);

export {
  AuthorModel,
  ArticleModel
};