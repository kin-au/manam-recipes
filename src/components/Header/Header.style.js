import styled from "styled-components";
import { lightTheme } from "../../themes";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  background-color: ${lightTheme.colors.background};
  color: ${lightTheme.colors.primary};
  box-shadow: 0 0.125rem 0.5rem #403d3959;

  h1 {
    font-size: 2rem;
  }
`;

export { Header };
