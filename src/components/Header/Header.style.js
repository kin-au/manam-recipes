import styled from "styled-components";
import { lightTheme } from "../../themes";

const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 6rem;
  width: 100%;
  background-color: ${lightTheme.colors.background};
  color: ${lightTheme.colors.primary};
  font-size: 2rem;
`;

export { Header };
