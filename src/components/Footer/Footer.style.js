import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0rem;
  font-size: 0.8rem;

  a {
    color: ${(props) => props.theme.primaryText};
    text-decoration: none;
    :hover {
      color: #e5a4cb;
    }
  }
`;

export { Footer };
