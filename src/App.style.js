import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }
  `;

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Page = styled.div`
  flex-grow: 1;
  margin: 0 1.25rem;
`;

export { GlobalStyle, Container, Page };
