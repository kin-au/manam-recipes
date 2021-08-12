import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
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
          <Box textAlign="center" p={6}>
            Menu
          </Box>
          <Divider />
          <List>
            <Link to="/">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <SC.StyledListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/about">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <SC.StyledListItemText primary={"About"} />
              </ListItem>
            </Link>
            <Link to="/recipes">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <SC.StyledListItemText primary={"Recipes"} />
              </ListItem>
            </Link>
            <Link to="/contact">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <SC.StyledListItemText primary={"Contact"} />
              </ListItem>
            </Link>
          </List>
        </SC.MenuContainer>
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
