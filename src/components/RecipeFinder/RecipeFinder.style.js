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

export { RecipeFinder, SearchContainer, SortContainer, Field };
