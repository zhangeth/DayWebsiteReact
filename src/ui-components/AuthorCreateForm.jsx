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
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Author, Article } from "../models";
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
export default function AuthorCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    Articles: [],
    dateJoinedClub: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [Articles, setArticles] = React.useState(initialValues.Articles);
  const [dateJoinedClub, setDateJoinedClub] = React.useState(
    initialValues.dateJoinedClub
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setArticles(initialValues.Articles);
    setCurrentArticlesValue(undefined);
    setCurrentArticlesDisplayValue("");
    setDateJoinedClub(initialValues.dateJoinedClub);
    setErrors({});
  };
  const [currentArticlesDisplayValue, setCurrentArticlesDisplayValue] =
    React.useState("");
  const [currentArticlesValue, setCurrentArticlesValue] =
    React.useState(undefined);
  const ArticlesRef = React.createRef();
  const getIDValue = {
    Articles: (r) => JSON.stringify({ id: r?.id }),
  };
  const ArticlesIdSet = new Set(
    Array.isArray(Articles)
      ? Articles.map((r) => getIDValue.Articles?.(r))
      : getIDValue.Articles?.(Articles)
  );
  const articleRecords = useDataStoreBinding({
    type: "collection",
    model: Article,
  }).items;
  const getDisplayValue = {
    Articles: (r) => `${r?.summary ? r?.summary + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    Articles: [],
    dateJoinedClub: [],
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
          name,
          Articles,
          dateJoinedClub,
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
          const modelFieldsToSave = {
            name: modelFields.name,
            dateJoinedClub: modelFields.dateJoinedClub,
          };
          const author = await DataStore.save(new Author(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...Articles.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Article.copyOf(original, (updated) => {
                    updated.authorId = author.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AuthorCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              Articles,
              dateJoinedClub,
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
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              Articles: values,
              dateJoinedClub,
            };
            const result = onChange(modelFields);
            values = result?.Articles ?? values;
          }
          setArticles(values);
          setCurrentArticlesValue(undefined);
          setCurrentArticlesDisplayValue("");
        }}
        currentFieldValue={currentArticlesValue}
        label={"Articles"}
        items={Articles}
        hasError={errors?.Articles?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Articles", currentArticlesValue)
        }
        errorMessage={errors?.Articles?.errorMessage}
        getBadgeText={getDisplayValue.Articles}
        setFieldValue={(model) => {
          setCurrentArticlesDisplayValue(
            model ? getDisplayValue.Articles(model) : ""
          );
          setCurrentArticlesValue(model);
        }}
        inputFieldRef={ArticlesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Articles"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Article"
          value={currentArticlesDisplayValue}
          options={articleRecords
            .filter((r) => !ArticlesIdSet.has(getIDValue.Articles?.(r)))
            .map((r) => ({
              id: getIDValue.Articles?.(r),
              label: getDisplayValue.Articles?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentArticlesValue(
              articleRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentArticlesDisplayValue(label);
            runValidationTasks("Articles", label);
          }}
          onClear={() => {
            setCurrentArticlesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Articles?.hasError) {
              runValidationTasks("Articles", value);
            }
            setCurrentArticlesDisplayValue(value);
            setCurrentArticlesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Articles", currentArticlesDisplayValue)
          }
          errorMessage={errors.Articles?.errorMessage}
          hasError={errors.Articles?.hasError}
          ref={ArticlesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Articles")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Date joined club"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateJoinedClub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              Articles,
              dateJoinedClub: value,
            };
            const result = onChange(modelFields);
            value = result?.dateJoinedClub ?? value;
          }
          if (errors.dateJoinedClub?.hasError) {
            runValidationTasks("dateJoinedClub", value);
          }
          setDateJoinedClub(value);
        }}
        onBlur={() => runValidationTasks("dateJoinedClub", dateJoinedClub)}
        errorMessage={errors.dateJoinedClub?.errorMessage}
        hasError={errors.dateJoinedClub?.hasError}
        {...getOverrideProps(overrides, "dateJoinedClub")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
