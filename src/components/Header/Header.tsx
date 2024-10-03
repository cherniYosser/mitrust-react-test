import type { JSX } from "react";
import { Wrapper } from "./Header.styles";

type HeaderType = {
  title: string;
};

const Header = ({ title }: HeaderType): JSX.Element => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};

export default Header;
