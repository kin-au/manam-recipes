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
  Header,
  SubHeader,
  SubSection,
  UnorderedList,
  OrderedList,
};
