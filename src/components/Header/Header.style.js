import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.accent};
  color: #403d39;
  box-shadow: 0 0.125rem 0.5rem #403d3959;

  h1 {
    font-size: 2rem;
  }
`;

export { Header };
