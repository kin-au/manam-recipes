import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const StyledIconButton = styled(IconButton)`
  width: 100vw;
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
  color: black;
`;

const MenuContainer = styled.div`
  background-color: #fffcf2;
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
