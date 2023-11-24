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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Article, Asset, Author } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { DataStore } from "aws-amplify/datastore";
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
export default function ArticleUpdateForm(props) {
  const {
    id: idProp,
    article: articleModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    summary: "",
    name: "",
    authorId: undefined,
    Assets: [],
    date: "",
  };
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [name, setName] = React.useState(initialValues.name);
  const [authorId, setAuthorId] = React.useState(initialValues.authorId);
  const [Assets, setAssets] = React.useState(initialValues.Assets);
  const [date, setDate] = React.useState(initialValues.date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = articleRecord
      ? { ...initialValues, ...articleRecord, authorId, Assets: linkedAssets }
      : initialValues;
    setSummary(cleanValues.summary);
    setName(cleanValues.name);
    setAuthorId(cleanValues.authorId);
    setCurrentAuthorIdValue(undefined);
    setCurrentAuthorIdDisplayValue("");
    setAssets(cleanValues.Assets ?? []);
    setCurrentAssetsValue(undefined);
    setCurrentAssetsDisplayValue("");
    setDate(cleanValues.date);
    setErrors({});
  };
  const [articleRecord, setArticleRecord] = React.useState(articleModelProp);
  const [linkedAssets, setLinkedAssets] = React.useState([]);
  const canUnlinkAssets = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Article, idProp)
        : articleModelProp;
      setArticleRecord(record);
      const authorIdRecord = record ? await record.authorId : undefined;
      setAuthorId(authorIdRecord);
      const linkedAssets = record ? await record.Assets.toArray() : [];
      setLinkedAssets(linkedAssets);
    };
    queryData();
  }, [idProp, articleModelProp]);
  React.useEffect(resetStateValues, [articleRecord, authorId, linkedAssets]);
  const [currentAuthorIdDisplayValue, setCurrentAuthorIdDisplayValue] =
    React.useState("");
  const [currentAuthorIdValue, setCurrentAuthorIdValue] =
    React.useState(undefined);
  const authorIdRef = React.createRef();
  const [currentAssetsDisplayValue, setCurrentAssetsDisplayValue] =
    React.useState("");
  const [currentAssetsValue, setCurrentAssetsValue] = React.useState(undefined);
  const AssetsRef = React.createRef();
  const getIDValue = {
    Assets: (r) => JSON.stringify({ id: r?.id }),
  };
  const AssetsIdSet = new Set(
    Array.isArray(Assets)
      ? Assets.map((r) => getIDValue.Assets?.(r))
      : getIDValue.Assets?.(Assets)
  );
  const authorRecords = useDataStoreBinding({
    type: "collection",
    model: Author,
  }).items;
  const assetRecords = useDataStoreBinding({
    type: "collection",
    model: Asset,
  }).items;
  const getDisplayValue = {
    authorId: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Assets: (r) => `${r?.imgKey ? r?.imgKey + " - " : ""}${r?.id}`,
  };
  const validations = {
    summary: [],
    name: [{ type: "Required" }],
    authorId: [{ type: "Required" }],
    Assets: [],
    date: [],
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
          summary,
          name,
          authorId,
          Assets,
          date,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const promises = [];
          const assetsToLink = [];
          const assetsToUnLink = [];
          const assetsSet = new Set();
          const linkedAssetsSet = new Set();
          Assets.forEach((r) => assetsSet.add(getIDValue.Assets?.(r)));
          linkedAssets.forEach((r) =>
            linkedAssetsSet.add(getIDValue.Assets?.(r))
          );
          linkedAssets.forEach((r) => {
            if (!assetsSet.has(getIDValue.Assets?.(r))) {
              assetsToUnLink.push(r);
            }
          });
          Assets.forEach((r) => {
            if (!linkedAssetsSet.has(getIDValue.Assets?.(r))) {
              assetsToLink.push(r);
            }
          });
          assetsToUnLink.forEach((original) => {
            if (!canUnlinkAssets) {
              throw Error(
                `Asset ${original.id} cannot be unlinked from Article because articleId is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Asset.copyOf(original, (updated) => {
                  updated.articleId = null;
                })
              )
            );
          });
          assetsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Asset.copyOf(original, (updated) => {
                  updated.articleId = articleRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            summary: modelFields.summary,
            name: modelFields.name,
            authorId: modelFields.authorId,
            date: modelFields.date,
          };
          promises.push(
            DataStore.save(
              Article.copyOf(articleRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ArticleUpdateForm")}
      {...rest}
    >
      <TextField
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        value={summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              summary: value,
              name,
              authorId,
              Assets,
              date,
            };
            const result = onChange(modelFields);
            value = result?.summary ?? value;
          }
          if (errors.summary?.hasError) {
            runValidationTasks("summary", value);
          }
          setSummary(value);
        }}
        onBlur={() => runValidationTasks("summary", summary)}
        errorMessage={errors.summary?.errorMessage}
        hasError={errors.summary?.hasError}
        {...getOverrideProps(overrides, "summary")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              summary,
              name: value,
              authorId,
              Assets,
              date,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              summary,
              name,
              authorId: value,
              Assets,
              date,
            };
            const result = onChange(modelFields);
            value = result?.authorId ?? value;
          }
          setAuthorId(value);
          setCurrentAuthorIdValue(undefined);
        }}
        currentFieldValue={currentAuthorIdValue}
        label={"Author id"}
        items={authorId ? [authorId] : []}
        hasError={errors?.authorId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("authorId", currentAuthorIdValue)
        }
        errorMessage={errors?.authorId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.authorId(
                authorRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentAuthorIdDisplayValue(
            value
              ? getDisplayValue.authorId(
                  authorRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentAuthorIdValue(value);
        }}
        inputFieldRef={authorIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Author id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Author"
          value={currentAuthorIdDisplayValue}
          options={authorRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.authorId?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAuthorIdValue(id);
            setCurrentAuthorIdDisplayValue(label);
            runValidationTasks("authorId", label);
          }}
          onClear={() => {
            setCurrentAuthorIdDisplayValue("");
          }}
          defaultValue={authorId}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.authorId?.hasError) {
              runValidationTasks("authorId", value);
            }
            setCurrentAuthorIdDisplayValue(value);
            setCurrentAuthorIdValue(undefined);
          }}
          onBlur={() => runValidationTasks("authorId", currentAuthorIdValue)}
          errorMessage={errors.authorId?.errorMessage}
          hasError={errors.authorId?.hasError}
          ref={authorIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "authorId")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              summary,
              name,
              authorId,
              Assets: values,
              date,
            };
            const result = onChange(modelFields);
            values = result?.Assets ?? values;
          }
          setAssets(values);
          setCurrentAssetsValue(undefined);
          setCurrentAssetsDisplayValue("");
        }}
        currentFieldValue={currentAssetsValue}
        label={"Assets"}
        items={Assets}
        hasError={errors?.Assets?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Assets", currentAssetsValue)
        }
        errorMessage={errors?.Assets?.errorMessage}
        getBadgeText={getDisplayValue.Assets}
        setFieldValue={(model) => {
          setCurrentAssetsDisplayValue(
            model ? getDisplayValue.Assets(model) : ""
          );
          setCurrentAssetsValue(model);
        }}
        inputFieldRef={AssetsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Assets"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Asset"
          value={currentAssetsDisplayValue}
          options={assetRecords
            .filter((r) => !AssetsIdSet.has(getIDValue.Assets?.(r)))
            .map((r) => ({
              id: getIDValue.Assets?.(r),
              label: getDisplayValue.Assets?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAssetsValue(
              assetRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAssetsDisplayValue(label);
            runValidationTasks("Assets", label);
          }}
          onClear={() => {
            setCurrentAssetsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Assets?.hasError) {
              runValidationTasks("Assets", value);
            }
            setCurrentAssetsDisplayValue(value);
            setCurrentAssetsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Assets", currentAssetsDisplayValue)}
          errorMessage={errors.Assets?.errorMessage}
          hasError={errors.Assets?.hasError}
          ref={AssetsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Assets")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              summary,
              name,
              authorId,
              Assets,
              date: value,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
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
          isDisabled={!(idProp || articleModelProp)}
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
              !(idProp || articleModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
