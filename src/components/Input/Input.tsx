import type { InputHTMLAttributes, JSX, FocusEvent, ChangeEvent } from "react";

import { Wrapper } from "./Input.styles";

export type InputProps = {
  clearable?: boolean;
  error?: string;
  hasError?: boolean;
  label?: string;
  onBlur?: (value: string, props: { [key: string]: string }) => void;
  onChange?: (value: string, props: { [key: string]: string }) => void;
  onFocus?: (value: string, props: { [key: string]: string }) => void;
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
  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    if (typeof onFocus === "function") {
      onFocus(event.target.value, props);
    }
  };
  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    if (typeof onBlur === "function") {
      onBlur(event.target.value, props);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (typeof onChange === "function") {
      onChange(event.target.value, props);
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
