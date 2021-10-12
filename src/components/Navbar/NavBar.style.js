import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const StyledIconButton = styled(IconButton)`
  && {
    width: 90vw;
    max-width: 30rem;
    border-radius: 5px;
    padding: 6px;
    margin: 6px;
    border: 2px solid #0000001a;
  }
`;

const MenuHeader = styled.div`
  padding: 3rem 0;
  text-align: center;
  font-weight: 700;
`;

const StyledListItemText = styled(ListItemText)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.secondaryText};
`;

const MenuContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.secondaryText};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export {
  StyledIconButton,
  MenuHeader,
  StyledListItemText,
  MenuContainer,
  StyledLink,
};
