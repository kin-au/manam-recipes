import styled from "styled-components";
import { lightTheme } from "../../themes";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0rem;
  color: ${lightTheme.colors.primary};
  font-size: 0.8rem;

  a {
    color: #403d39;
    text-decoration: none;
    :hover {
      color: #e5a4cb;
    }
  }
`;

export { Footer };
