import styled from "styled-components";
import { lightTheme } from "../../themes";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1rem 0rem;
  color: ${lightTheme.colors.primary};
  font-size: 0.8rem;
`;

export { Footer };
