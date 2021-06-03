import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <IconButton
        aria-label="open navbar"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {}}
      >
        <div>
          <Box textAlign="center" p={6}>
            Menu
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => {}}>
              <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem button onClick={() => {}}>
              <ListItemText primary={"About"} />
            </ListItem>
            <ListItem button onClick={() => {}}>
              <ListItemText primary={"Recipes"} />
            </ListItem>
            <ListItem button onClick={() => {}}>
              <ListItemText primary={"Contact"} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
