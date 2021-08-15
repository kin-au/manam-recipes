import styled from "styled-components";
import { Link } from "react-router-dom";

const RecipeCard = styled.div`
  margin: 1.25rem;
  padding: 0.5rem;
  box-shadow: 0.125rem 0.125rem 0.5rem #403d3959;
  background-color: #fffcf2;

  header {
    font-weight: 500;
    font-size: 1.25rem;
  }

  .subheader {
    font-style: italic;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export { RecipeCard, StyledLink };
