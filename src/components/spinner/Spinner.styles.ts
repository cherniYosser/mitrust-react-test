import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const sizes = {
  small: 30,
  medium: 60,
  large: 80,
};

type Size = keyof typeof sizes;

type WrapperProps = {
  $size: Size;
  $fullPage: boolean;
};

const Wrapper = styled("div")<WrapperProps>`
  ${({ $size, $fullPage }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    z-index: 1;

    ${$fullPage &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100vh;
      width: 100vw;
      z-index: 9999;
      svg {
        background: #ffffff;
        border: 5px solid #ffffff;
        border-radius: 50%;
        outline: 1px solid #d0d0d0;
      }
    `}

    /* a fallback for internet explorer */
    .ie-fallback {
      -ms-animation: 1.1s ${rotate} linear infinite;
    }

    svg {
      height: ${sizes[$fullPage ? "large" : $size]}px;
      width: ${sizes[$fullPage ? "large" : $size]}px;
      .spinner-line {
        transform-origin: center;
        animation: 1.1s ${rotate} linear infinite;
      }
      .spinner-main {
        transform-origin: center;
        animation: 1.1s 0.04s ${rotate} cubic-bezier(0.5, 0.04, 0.4, 0.88)
          infinite;
      }
      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        & {
          outline: none;
        }
      }
    }
  `}
`;

export { Wrapper };
export type { Size };
