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
`;

const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export { RecipeFinder, SearchContainer, SortContainer };
