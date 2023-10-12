// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AccessLevels = {
  "PUBLIC": "PUBLIC",
  "PROTECTED": "PROTECTED",
  "PRIVATE": "PRIVATE"
};

const { Asset, Author, Article } = initSchema(schema);

export {
  Asset,
  Author,
  Article,
  AccessLevels
};