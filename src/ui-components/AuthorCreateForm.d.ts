/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Article } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthorCreateFormInputValues = {
    name?: string;
    Articles?: Article[];
    dateJoinedClub?: string;
};
export declare type AuthorCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    Articles?: ValidationFunction<Article>;
    dateJoinedClub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorCreateFormOverridesProps = {
    AuthorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Articles?: PrimitiveOverrideProps<AutocompleteProps>;
    dateJoinedClub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthorCreateFormInputValues) => AuthorCreateFormInputValues;
    onSuccess?: (fields: AuthorCreateFormInputValues) => void;
    onError?: (fields: AuthorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorCreateFormInputValues) => AuthorCreateFormInputValues;
    onValidate?: AuthorCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorCreateForm(props: AuthorCreateFormProps): React.ReactElement;