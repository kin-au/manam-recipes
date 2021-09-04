import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import * as SC from "./NavBar.style.js";

const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <SC.StyledIconButton
        aria-label="open navbar"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon />
      </SC.StyledIconButton>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {}}
      >
        <SC.MenuContainer>
          <SC.MenuHeader>Menu</SC.MenuHeader>
          <Divider />
          <List>
            <SC.StyledLink to="/">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <SC.StyledListItemText primary={"Home"} />
              </ListItem>
            </SC.StyledLink>
            <SC.StyledLink to="/about">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <SC.StyledListItemText primary={"About"} />
              </ListItem>
            </SC.StyledLink>
            <SC.StyledLink to="/recipes">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <SC.StyledListItemText primary={"Recipes"} />
              </ListItem>
            </SC.StyledLink>
            <SC.StyledLink to="/contact">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <SC.StyledListItemText primary={"Contact"} />
              </ListItem>
            </SC.StyledLink>
          </List>
        </SC.MenuContainer>
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
