/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuthorModel = /* GraphQL */ `
  query GetAuthorModel($id: ID!) {
    getAuthorModel(id: $id) {
      id
      name
      ArticleModels {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAuthorModels = /* GraphQL */ `
  query ListAuthorModels(
    $filter: ModelAuthorModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthorModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAuthorModels = /* GraphQL */ `
  query SyncAuthorModels(
    $filter: ModelAuthorModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthorModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getArticleModel = /* GraphQL */ `
  query GetArticleModel($id: ID!) {
    getArticleModel(id: $id) {
      id
      content
      name
      date
      authormodelID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listArticleModels = /* GraphQL */ `
  query ListArticleModels(
    $filter: ModelArticleModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        name
        date
        authormodelID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncArticleModels = /* GraphQL */ `
  query SyncArticleModels(
    $filter: ModelArticleModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArticleModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        name
        date
        authormodelID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const articleModelsByAuthormodelID = /* GraphQL */ `
  query ArticleModelsByAuthormodelID(
    $authormodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleModelsByAuthormodelID(
      authormodelID: $authormodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        name
        date
        authormodelID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
