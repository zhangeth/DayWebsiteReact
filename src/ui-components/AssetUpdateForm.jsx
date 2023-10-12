/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Asset, Article } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function AssetUpdateForm(props) {
  const {
    id: idProp,
    asset: assetModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    imgKey: "",
    articleID: undefined,
    accessLevel: "",
  };
  const [imgKey, setImgKey] = React.useState(initialValues.imgKey);
  const [articleID, setArticleID] = React.useState(initialValues.articleID);
  const [accessLevel, setAccessLevel] = React.useState(
    initialValues.accessLevel
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = assetRecord
      ? { ...initialValues, ...assetRecord, articleID }
      : initialValues;
    setImgKey(cleanValues.imgKey);
    setArticleID(cleanValues.articleID);
    setCurrentArticleIDValue(undefined);
    setCurrentArticleIDDisplayValue("");
    setAccessLevel(cleanValues.accessLevel);
    setErrors({});
  };
  const [assetRecord, setAssetRecord] = React.useState(assetModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Asset, idProp)
        : assetModelProp;
      setAssetRecord(record);
      const articleIDRecord = record ? await record.articleID : undefined;
      setArticleID(articleIDRecord);
    };
    queryData();
  }, [idProp, assetModelProp]);
  React.useEffect(resetStateValues, [assetRecord, articleID]);
  const [currentArticleIDDisplayValue, setCurrentArticleIDDisplayValue] =
    React.useState("");
  const [currentArticleIDValue, setCurrentArticleIDValue] =
    React.useState(undefined);
  const articleIDRef = React.createRef();
  const articleRecords = useDataStoreBinding({
    type: "collection",
    model: Article,
  }).items;
  const getDisplayValue = {
    articleID: (r) => `${r?.summary ? r?.summary + " - " : ""}${r?.id}`,
  };
  const validations = {
    imgKey: [{ type: "Required" }],
    articleID: [{ type: "Required" }],
    accessLevel: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          imgKey,
          articleID,
          accessLevel,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Asset.copyOf(assetRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AssetUpdateForm")}
      {...rest}
    >
      <TextField
        label="Img key"
        isRequired={true}
        isReadOnly={false}
        value={imgKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgKey: value,
              articleID,
              accessLevel,
            };
            const result = onChange(modelFields);
            value = result?.imgKey ?? value;
          }
          if (errors.imgKey?.hasError) {
            runValidationTasks("imgKey", value);
          }
          setImgKey(value);
        }}
        onBlur={() => runValidationTasks("imgKey", imgKey)}
        errorMessage={errors.imgKey?.errorMessage}
        hasError={errors.imgKey?.hasError}
        {...getOverrideProps(overrides, "imgKey")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              imgKey,
              articleID: value,
              accessLevel,
            };
            const result = onChange(modelFields);
            value = result?.articleID ?? value;
          }
          setArticleID(value);
          setCurrentArticleIDValue(undefined);
        }}
        currentFieldValue={currentArticleIDValue}
        label={"Article id"}
        items={articleID ? [articleID] : []}
        hasError={errors?.articleID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("articleID", currentArticleIDValue)
        }
        errorMessage={errors?.articleID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.articleID(
                articleRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentArticleIDDisplayValue(
            value
              ? getDisplayValue.articleID(
                  articleRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentArticleIDValue(value);
        }}
        inputFieldRef={articleIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Article id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Article"
          value={currentArticleIDDisplayValue}
          options={articleRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.articleID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentArticleIDValue(id);
            setCurrentArticleIDDisplayValue(label);
            runValidationTasks("articleID", label);
          }}
          onClear={() => {
            setCurrentArticleIDDisplayValue("");
          }}
          defaultValue={articleID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.articleID?.hasError) {
              runValidationTasks("articleID", value);
            }
            setCurrentArticleIDDisplayValue(value);
            setCurrentArticleIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("articleID", currentArticleIDValue)}
          errorMessage={errors.articleID?.errorMessage}
          hasError={errors.articleID?.hasError}
          ref={articleIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "articleID")}
        ></Autocomplete>
      </ArrayField>
      <SelectField
        label="Access level"
        placeholder="Please select an option"
        isDisabled={false}
        value={accessLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgKey,
              articleID,
              accessLevel: value,
            };
            const result = onChange(modelFields);
            value = result?.accessLevel ?? value;
          }
          if (errors.accessLevel?.hasError) {
            runValidationTasks("accessLevel", value);
          }
          setAccessLevel(value);
        }}
        onBlur={() => runValidationTasks("accessLevel", accessLevel)}
        errorMessage={errors.accessLevel?.errorMessage}
        hasError={errors.accessLevel?.hasError}
        {...getOverrideProps(overrides, "accessLevel")}
      >
        <option
          children="Public"
          value="PUBLIC"
          {...getOverrideProps(overrides, "accessLeveloption0")}
        ></option>
        <option
          children="Protected"
          value="PROTECTED"
          {...getOverrideProps(overrides, "accessLeveloption1")}
        ></option>
        <option
          children="Private"
          value="PRIVATE"
          {...getOverrideProps(overrides, "accessLeveloption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || assetModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || assetModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
