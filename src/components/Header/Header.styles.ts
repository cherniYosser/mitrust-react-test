import styled, { css, createGlobalStyle } from "styled-components";

const Wrapper = styled("div")(
  ({}) => css`
    position: fixed;
    width: 100%;
    top: 0;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    height: 35px;
    background: #ffffff;
    z-index: 2;
    padding: 20px;
    transition: left 0.25s ease-out;
    box-shadow: 0px 20px 10px -20px #111;

    h1 {
      font-weight: 500;
      font-size: 1.875rem;
      line-height: 1.875rem;
      margin-top: 10px;
    }

    @media (max-width: 768px) {
      grid-template-columns: max-content;
      justify-content: start;
      align-content: center;
      height: 50px;
      top: calc(var(60) * 1px);
      left: 0;
      width: 100%;
      padding: 5px 10px 0 10px;

      h1 {
        font-size: 1.5rem;
        line-height: 1.8rem;
        margin-top: 0;
      }
      .page-header__actions {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        justify-content: flex-end;
        background: #ffffff;
        border-top: 1px solid #000;
        margin-top: 0.75rem;
      }
    }
  `
);

const GlobalHeight = createGlobalStyle(
  () => css`
    :root {
      --topbar-height: 75px;

      @media (max-width: 768pxpx) {
        --topbar-height: 110px;
      }
    }
  `
);

export { Wrapper, GlobalHeight };
