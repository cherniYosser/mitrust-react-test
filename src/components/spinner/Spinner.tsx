import { type JSX, type CSSProperties } from "react";

import { Wrapper, type Size } from "./Spinner.styles";

type SpinnerProps = {
  className?: string;
  size?: Size;
  fullPage?: boolean;
  id?: string;
  style?: CSSProperties;
};

function Spinner({
  size = "medium",
  fullPage = false,
  id = "",
  ...restProps
}: SpinnerProps): JSX.Element {
  return (
    <Wrapper $size={size} $fullPage={fullPage} {...restProps}>
      <div className="ie-fallback">
        <svg viewBox="0 0 500 500" width="500pt" height="500pt">
          <g className="spinner-line">
            <path
              d=" M 426.894 73.41 C 381.629 28.068 319.067 0 250 0 C 112.021 0 0 112.021 0 250 L 0 250 C 0 319.067 28.068 381.629 73.41 426.894 L 123.45 376.854 C 90.92 344.401 70.781 299.534 70.781 250 L 70.781 250 C 70.781 151.087 151.087 70.781 250 70.781 C 299.534 70.781 344.401 90.92 376.854 123.45 L 426.894 73.41 Z "
              fill="rgb(36,60,252)"
            />
            <path
              d=" M 426.894 73.41 C 472.057 118.65 500 181.088 500 250 C 500 387.979 387.979 500 250 500 C 181.088 500 118.65 472.057 73.41 426.894 L 123.45 376.854 C 155.878 409.205 200.62 429.219 250 429.219 C 348.913 429.219 429.219 348.913 429.219 250 C 429.219 200.62 409.205 155.878 376.854 123.45 L 426.894 73.41 Z "
              fill="rgb(150, 160, 251)"
            />
          </g>
          <path
            className="spinner-main"
            d=" M 426.894 73.41 C 472.057 118.65 500 181.088 500 250 C 500 387.979 387.979 500 250 500 C 181.088 500 118.65 472.057 73.41 426.894 L 123.45 376.854 C 155.878 409.205 200.62 429.219 250 429.219 C 348.913 429.219 429.219 348.913 429.219 250 C 429.219 200.62 409.205 155.878 376.854 123.45 L 426.894 73.41 Z "
            fill="rgb(30,30,35)"
          />
        </svg>
      </div>
    </Wrapper>
  );
}

export default Spinner;
