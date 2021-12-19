import styled from "styled-components";
import { Link } from "react-router-dom";

const Recipe = styled.div`
  /* margin: 0 1rem; */
`;

const BackButton = styled.span`
  display: inline-block;
`;

const Arrow = styled.span`
  font-size: 1.2rem;
  margin-right: 0.25rem;
`;

const StyledLink = styled(Link)`
  margin: 1rem 0;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};
  transition-duration: 0.1s;
  :hover {
    color: #e5a4cb;
  }
`;

const Header = styled.header`
  h1 {
    font-size: 1.5rem;
  }
`;

const SubSection = styled.div`
  margin-top: 1.2rem;
`;

const SubHeader = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const UnorderedList = styled.ol`
  margin-left: 1rem;
  li {
    margin-bottom: 0.5rem;
    list-style-type: square;
  }
`;

const OrderedList = styled.ol`
  margin-left: 2.2rem;
  counter-reset: list;
  li:before {
    margin-left: -2.2rem;
    content: counter(list) ") ";
    display: inline-block;
    counter-increment: list;
    width: 2.2rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
`;

export {
  Recipe,
  BackButton,
  Arrow,
  StyledLink,
  Header,
  SubHeader,
  SubSection,
  UnorderedList,
  OrderedList,
};
