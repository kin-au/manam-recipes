import styled from "styled-components";
import { lightTheme } from "../../themes";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 6rem;
  width: 100%;
  background-color: ${lightTheme.colors.background};
  color: ${lightTheme.colors.primary};

  h1 {
    font-size: 2rem;
  }
`;

export { Header };
