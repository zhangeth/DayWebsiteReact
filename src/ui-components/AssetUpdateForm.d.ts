/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Asset } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssetUpdateFormInputValues = {
    imgKey?: string;
    articleID?: string;
    accessLevel?: string;
};
export declare type AssetUpdateFormValidationValues = {
    imgKey?: ValidationFunction<string>;
    articleID?: ValidationFunction<string>;
    accessLevel?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssetUpdateFormOverridesProps = {
    AssetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imgKey?: PrimitiveOverrideProps<TextFieldProps>;
    articleID?: PrimitiveOverrideProps<AutocompleteProps>;
    accessLevel?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AssetUpdateFormProps = React.PropsWithChildren<{
    overrides?: AssetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    asset?: Asset;
    onSubmit?: (fields: AssetUpdateFormInputValues) => AssetUpdateFormInputValues;
    onSuccess?: (fields: AssetUpdateFormInputValues) => void;
    onError?: (fields: AssetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssetUpdateFormInputValues) => AssetUpdateFormInputValues;
    onValidate?: AssetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AssetUpdateForm(props: AssetUpdateFormProps): React.ReactElement;
