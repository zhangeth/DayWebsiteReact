/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthorModel = /* GraphQL */ `
  subscription OnCreateAuthorModel(
    $filter: ModelSubscriptionAuthorModelFilterInput
  ) {
    onCreateAuthorModel(filter: $filter) {
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
export const onUpdateAuthorModel = /* GraphQL */ `
  subscription OnUpdateAuthorModel(
    $filter: ModelSubscriptionAuthorModelFilterInput
  ) {
    onUpdateAuthorModel(filter: $filter) {
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
export const onDeleteAuthorModel = /* GraphQL */ `
  subscription OnDeleteAuthorModel(
    $filter: ModelSubscriptionAuthorModelFilterInput
  ) {
    onDeleteAuthorModel(filter: $filter) {
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
export const onCreateArticleModel = /* GraphQL */ `
  subscription OnCreateArticleModel(
    $filter: ModelSubscriptionArticleModelFilterInput
  ) {
    onCreateArticleModel(filter: $filter) {
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
export const onUpdateArticleModel = /* GraphQL */ `
  subscription OnUpdateArticleModel(
    $filter: ModelSubscriptionArticleModelFilterInput
  ) {
    onUpdateArticleModel(filter: $filter) {
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
export const onDeleteArticleModel = /* GraphQL */ `
  subscription OnDeleteArticleModel(
    $filter: ModelSubscriptionArticleModelFilterInput
  ) {
    onDeleteArticleModel(filter: $filter) {
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
