import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerAuthorModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuthorModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly ArticleModels?: (ArticleModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthorModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuthorModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly ArticleModels: AsyncCollection<ArticleModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuthorModel = LazyLoading extends LazyLoadingDisabled ? EagerAuthorModel : LazyAuthorModel

export declare const AuthorModel: (new (init: ModelInit<AuthorModel>) => AuthorModel) & {
  copyOf(source: AuthorModel, mutator: (draft: MutableModel<AuthorModel>) => MutableModel<AuthorModel> | void): AuthorModel;
}

type EagerArticleModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ArticleModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly name?: string | null;
  readonly date?: string | null;
  readonly authormodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArticleModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ArticleModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly name?: string | null;
  readonly date?: string | null;
  readonly authormodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ArticleModel = LazyLoading extends LazyLoadingDisabled ? EagerArticleModel : LazyArticleModel

export declare const ArticleModel: (new (init: ModelInit<ArticleModel>) => ArticleModel) & {
  copyOf(source: ArticleModel, mutator: (draft: MutableModel<ArticleModel>) => MutableModel<ArticleModel> | void): ArticleModel;
}