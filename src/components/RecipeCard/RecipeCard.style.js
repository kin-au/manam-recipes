import styled from "styled-components";
import { Link } from "react-router-dom";

const RecipeCard = styled.div`
  padding: 0.75rem;
  box-shadow: 0.125rem 0.125rem 0.5rem #00000059;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.secondaryText};
  transition: 0.2s;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.header`
  font-weight: 500;
  font-size: 1.33rem;
  margin-bottom: 0.25rem;
  padding: 0.25rem;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecipeText = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeDetail = styled.div`
  padding: 0.25rem;
`;

const SubHeader = styled.span`
  font-style: italic;
`;

const StyledLink = styled(Link)`
  margin: 0.75rem 0;
  color: black;
  text-decoration: none;
`;

export {
  RecipeCard,
  CardHeader,
  CardBody,
  RecipeText,
  RecipeDetail,
  SubHeader,
  StyledLink,
};
