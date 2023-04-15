/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AuthorModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthorModelUpdateFormInputValues = {
    name?: string;
};
export declare type AuthorModelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorModelUpdateFormOverridesProps = {
    AuthorModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: AuthorModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    authorModel?: AuthorModel;
    onSubmit?: (fields: AuthorModelUpdateFormInputValues) => AuthorModelUpdateFormInputValues;
    onSuccess?: (fields: AuthorModelUpdateFormInputValues) => void;
    onError?: (fields: AuthorModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorModelUpdateFormInputValues) => AuthorModelUpdateFormInputValues;
    onValidate?: AuthorModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorModelUpdateForm(props: AuthorModelUpdateFormProps): React.ReactElement;
