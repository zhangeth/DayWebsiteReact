/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Article, Asset } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ArticleUpdateFormInputValues = {
    summary?: string;
    name?: string;
    authorId?: string;
    Assets?: Asset[];
    date?: string;
};
export declare type ArticleUpdateFormValidationValues = {
    summary?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    authorId?: ValidationFunction<string>;
    Assets?: ValidationFunction<Asset>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticleUpdateFormOverridesProps = {
    ArticleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    authorId?: PrimitiveOverrideProps<AutocompleteProps>;
    Assets?: PrimitiveOverrideProps<AutocompleteProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArticleUpdateFormProps = React.PropsWithChildren<{
    overrides?: ArticleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    article?: Article;
    onSubmit?: (fields: ArticleUpdateFormInputValues) => ArticleUpdateFormInputValues;
    onSuccess?: (fields: ArticleUpdateFormInputValues) => void;
    onError?: (fields: ArticleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ArticleUpdateFormInputValues) => ArticleUpdateFormInputValues;
    onValidate?: ArticleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ArticleUpdateForm(props: ArticleUpdateFormProps): React.ReactElement;
