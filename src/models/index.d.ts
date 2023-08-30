import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerSource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Source, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly link?: string | null;
  readonly articleId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Source, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly link?: string | null;
  readonly articleId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Source = LazyLoading extends LazyLoadingDisabled ? EagerSource : LazySource

export declare const Source: (new (init: ModelInit<Source>) => Source) & {
  copyOf(source: Source, mutator: (draft: MutableModel<Source>) => MutableModel<Source> | void): Source;
}

type EagerAuthor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Author, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly Articles?: (Article | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Author, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly Articles: AsyncCollection<Article>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Author = LazyLoading extends LazyLoadingDisabled ? EagerAuthor : LazyAuthor

export declare const Author: (new (init: ModelInit<Author>) => Author) & {
  copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

type EagerArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly name?: string | null;
  readonly date?: string | null;
  readonly authorId: string;
  readonly Sources?: (Source | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly name?: string | null;
  readonly date?: string | null;
  readonly authorId: string;
  readonly Sources: AsyncCollection<Source>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Article = LazyLoading extends LazyLoadingDisabled ? EagerArticle : LazyArticle

export declare const Article: (new (init: ModelInit<Article>) => Article) & {
  copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}