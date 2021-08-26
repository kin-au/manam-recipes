import styled from "styled-components";

const Recipe = styled.div`
  /* margin: 0 1rem; */
`;

const BackButton = styled.div`
  margin: 1rem 0;
  a {
    color: #403d39;
    text-decoration: none;
  }
`;

const Header = styled.header`
  h1 {
    font-size: 1.5rem;
  }
`;

const SubHeader = styled.h2`
  font-size: 1rem;
`;

const SubSection = styled.div`
  margin-top: 1rem;
`;

const OrderedList = styled.ol`
  counter-reset: list;
  li:before {
    content: counter(list) ") ";
    counter-increment: list;
  }
`;

export { Recipe, BackButton, Header, SubHeader, SubSection, OrderedList };
