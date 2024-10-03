import type { InputHTMLAttributes, JSX, FocusEvent, ChangeEvent } from "react";

import { Wrapper } from "./Input.styles";

export type InputProps = {
  clearable?: boolean;
  error?: string;
  hasError?: boolean;
  label?: string;
  onBlur?: (value: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (value: ChangeEvent<HTMLInputElement>) => void;
  props?: { [key: string]: string };
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "onBlur" | "onFocus"
>;

const Input = ({
  error,
  value,
  id,
  onChange,
  onBlur,
  onFocus,
  required = false,
  clearable = false,
  props = {},
  ...restProps
}: InputProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (typeof onChange === "function") {
      onChange(event);
    }
  };
  const handleBlur = (event: ChangeEvent<HTMLInputElement>): void => {
    if (typeof onBlur === "function") {
      onBlur(event);
    }
  };
  const handleFocus = (event: ChangeEvent<HTMLInputElement>): void => {
    if (typeof onFocus === "function") {
      onFocus(event);
    }
  };
  return (
    <Wrapper
      type="text"
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      id={id}
      required={required}
      {...restProps}
    />
  );
};
Input.displayName = "Input";

export default Input;
