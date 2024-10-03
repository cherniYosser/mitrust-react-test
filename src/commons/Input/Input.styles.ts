import styled, { css } from "styled-components";

const formInputErrorMixin = css`
  border-bottom: 2px solid #c23934;
`;
export const Wrapper = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-left: unset !important;
  border-right: unset !important;
  border-top: unset !important;
  border-bottom: 1px solid #979797;
  border-radius: 4px 4px 0 0;

  max-width: 300px;
  width: 100%;
  padding: 0 0.375rem;
  line-height: var(--height-input);

  transition: border 0.1s linear, background-color 0.1s linear;
  width: 100%;
  border: 1px solid #1589ee;
  background-color: #f7f7f7;
  color: #343434;

  &:focus,
  &:active {
    border-bottom: 1px solid #1589ee;
    outline: none;
  }

  &[disabled],
  &.is-disabled {
    border-color: #a8b7c7;
    background-color: #a8b7c7;
    cursor: not-allowed;
    user-select: none;

    &:focus,
    &:active {
      box-shadow: none;
    }
  }

  background-color: #f7f7f7;
  &:read-only {
    &:hover,
    &:focus {
      background-color: #f4f6f9;
    }

    &:active {
      background-color: #eef1f6;
    }
  }

  &.has-error {
    ${formInputErrorMixin}
    & .c-input__icon {
      fill: #c23934;
    }
  }

  &[type="number"] {
    padding-right: 5px;
  }
  &.c-input--hide-background {
    background: transparent;
  }

  .has-error {
    & .c-input__icon {
      fill: #c23934;
    }
  }
`;
