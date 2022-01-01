import React from "react";
import {
  FormInputLabel,
  FormInputContainer,
  GroupContainer,
} from "./form-input.styles.jsx";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
