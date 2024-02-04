/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthorModelCreateFormInputValues = {
    name?: string;
};
export declare type AuthorModelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorModelCreateFormOverridesProps = {
    AuthorModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorModelCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthorModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthorModelCreateFormInputValues) => AuthorModelCreateFormInputValues;
    onSuccess?: (fields: AuthorModelCreateFormInputValues) => void;
    onError?: (fields: AuthorModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorModelCreateFormInputValues) => AuthorModelCreateFormInputValues;
    onValidate?: AuthorModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorModelCreateForm(props: AuthorModelCreateFormProps): React.ReactElement;
