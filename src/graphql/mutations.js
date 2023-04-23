/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthorModel = /* GraphQL */ `
  mutation CreateAuthorModel(
    $input: CreateAuthorModelInput!
    $condition: ModelAuthorModelConditionInput
  ) {
    createAuthorModel(input: $input, condition: $condition) {
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
export const updateAuthorModel = /* GraphQL */ `
  mutation UpdateAuthorModel(
    $input: UpdateAuthorModelInput!
    $condition: ModelAuthorModelConditionInput
  ) {
    updateAuthorModel(input: $input, condition: $condition) {
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
export const deleteAuthorModel = /* GraphQL */ `
  mutation DeleteAuthorModel(
    $input: DeleteAuthorModelInput!
    $condition: ModelAuthorModelConditionInput
  ) {
    deleteAuthorModel(input: $input, condition: $condition) {
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
export const createArticleModel = /* GraphQL */ `
  mutation CreateArticleModel(
    $input: CreateArticleModelInput!
    $condition: ModelArticleModelConditionInput
  ) {
    createArticleModel(input: $input, condition: $condition) {
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
export const updateArticleModel = /* GraphQL */ `
  mutation UpdateArticleModel(
    $input: UpdateArticleModelInput!
    $condition: ModelArticleModelConditionInput
  ) {
    updateArticleModel(input: $input, condition: $condition) {
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
export const deleteArticleModel = /* GraphQL */ `
  mutation DeleteArticleModel(
    $input: DeleteArticleModelInput!
    $condition: ModelArticleModelConditionInput
  ) {
    deleteArticleModel(input: $input, condition: $condition) {
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
