import styled from "styled-components";

const ToggleButton = styled.button`
  height: 1.5rem;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  transition: 0.2s;
  border: none;
  border-radius: 1rem;
  :hover {
    background-color: ${(props) => props.theme.secondaryBackground};
    cursor: pointer;
  }
`;

export { ToggleButton };
