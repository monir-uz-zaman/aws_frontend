import React, { useReducer, useEffect } from "react";

import Select from "react-select";
import { validate } from "../Validation/Validator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as classes from "./Input.module.css";

const inputReducer = (state, action) => {
  const { type, value, validators } = action;

  switch (type) {
    case "CHANGE":
      return {
        ...state,
        value,
        isValid: validate(value, validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };

    default:
      return state;
  }
};

export const Input = ({
  onInput,
  id,
  validators,

  type,
  element,
  placeholder,
  rows,
  errorText,
  label,
  labelInfo,
  initialValid,
  initialValue,
  iconName,
  selectData,
  disabled,
  style,
  button_label,
  changeButton,
  checked,
  switchChangedHandler,
  required,
  selectHomePage,
  colorStyles,
  defaultValue,

  ...props
}) => {
  const defaultColorStyles = {
    control: (styles, state) => ({
      ...styles,
      borderRadius: "1rem",
      height: "50px",
      minHeight: "50px",
      maxHeight: "50px",
      backgroundColor: "white",
      borderColor: "#00acde",
    }),
  };

  const initialState = {
    value: initialValue || "",
    isValid: initialValid || false,
    isTouched: false,
  };
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const { value, isValid, isTouched } = state;
  // as soon as the Input element is loaded it takes the value from the state and sends to the onInput which is our
  useEffect(() => {
    // if the function onInput is called it will the function InputHandler in form-hook(for validity check). ALl the data will be passed from here. This function Inputs all handle one input whereas onInput which in returns InputHandler is responsible for handling all the form
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changehandler = (e) => {
    if (props.isMulti ? e[0]?.value && e[0]?.label : e?.value && e?.label) {
      // it means it belongs to select_dropdown

      // is multi means they will have multiple values and should be an array

      dispatch({
        type: "CHANGE",
        value: props.isMulti ? e.map((el) => el?.value) : e?.value,
        validators,
      });
    } else {
      dispatch({
        type: "CHANGE",
        value: e.target.value,
        validators,
      });
    }
  };
  const touchedHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  let elements;

  if (element === "input") {
    elements = (
      <div
        className={`${classes.input_container} ${
          !isValid && isTouched && classes.formInputInvalid
        } `}
      >
        <input
          className={`${classes.input_text} font-400  `}
          placeholder="&nbsp;"
          id={id}
          type={type}
          onChange={changehandler}
          onBlur={touchedHandler}
          value={value}
          disabled={disabled}
          style={style}
        />
        <span className={`${classes.input_container_label} font-200  `}>
          {label}
        </span>
        {iconName && (
          <span className={`${classes.input_icon} font-500`}>{iconName}</span>
        )}
      </div>
    );
  } else if (element === "textarea") {
    elements = (
      <div className="">
        <p
          className={`font-400  `}
          style={{
            padding: "0rem 0rem 0.2rem 1rem",
            color: "white",
          }}
        >
          {label}
        </p>

        <textarea
          id={id}
          onChange={changehandler}
          onBlur={touchedHandler}
          value={value}
          rows={rows || 3}
          className={`${classes.input_text} font-400 regular `}
        />
      </div>
    );
  } else if (element === "select_dropdown") {
    console.log(selectData);
    elements = (
      <div>
        {!iconName ? (
          <p
            className={`font-300 `}
            style={{
              padding: "0rem 0rem 0.2rem 1rem",
              color: selectHomePage ? "rgb(0,172,222)" : "white",
            }}
          >
            {label}
          </p>
        ) : (
          <p>
            {<FontAwesomeIcon icon={iconName} className={classes.iconColor} />}
          </p>
        )}

        {labelInfo && (
          <>
            <p
              className={`font-100 `}
              style={{
                padding: "0rem 0rem 0.2rem 1rem",
                color: "black",
              }}
            >
              {labelInfo}
            </p>
            <br />
          </>
        )}

        <div className="protrebleheavy">
          {" "}
          <Select
            options={selectData}
            onChange={changehandler}
            onBlur={touchedHandler}
            placeholder={placeholder}
            className={`font-200`}
            styles={colorStyles ? colorStyles : defaultColorStyles}
            defaultValue={defaultValue?.label && defaultValue}
            isDisabled={disabled}
            {...props}
          />
        </div>
      </div>
    );
  }
  return (
    <>
      {elements}
      {!isValid && isTouched && errorText && (
        <p className={`${classes.errorText} font-300 regular`}>{errorText}</p>
      )}
    </>
  );
};
