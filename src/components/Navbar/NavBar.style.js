import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";

const StyledIconButton = styled(IconButton)`
  width: 100vw;
`;

const StyledListItemText = styled(ListItemText)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  span {
    text-decoration: none;
  }
`;

const MenuContainer = styled.div`
  background-color: #fffcf2;
`;

export { StyledIconButton, StyledListItemText, MenuContainer };
