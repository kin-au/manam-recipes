import styled from "styled-components";

const RecipeFinder = styled.div`
  display: flex;

  .inputField {
    height: 1.5rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.25rem;
`;

const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.25rem;
`;

const Field = styled.div`
  margin: 0.25rem 0;
  display: flex;
  flex-direction: column;
`;

const FieldLabel = styled.label`
  margin-bottom: 0.25rem;
  height: 1rem;
`;

const FieldInput = styled.div`
  height: 1.25rem;
  input {
    padding-left: 0.25rem;
    background-color: #ffffff;
    border: none;
    border-radius: 3px;
  }
  select {
    padding-left: 0.25rem;
    width: 100%;
    background-color: #ffffff;
    border: none;
    border-radius: 3px;
    :hover {
      cursor: pointer;
    }
  }
`;

const ResetButton = styled.button`
  margin-top: 1.25rem;
  height: 1.5rem;
  background-color: #ffffff;
  border: none;
  border-radius: 3px;
  :hover {
    cursor: pointer;
    background-color: #fffcf2;
  }
`;

export {
  RecipeFinder,
  SearchContainer,
  SortContainer,
  Field,
  FieldLabel,
  FieldInput,
  ResetButton,
};
