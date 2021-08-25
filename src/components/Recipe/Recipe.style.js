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

const Subheader = styled.h2`
  font-size: 1rem;
`;

export { Recipe, BackButton, Header, Subheader };
