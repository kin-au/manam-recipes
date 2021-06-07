import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const useStyles = makeStyles({
    button: {
      width: "100vw",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <IconButton
        className={classes.button}
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
            <Link to="/">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/about">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ListItemText primary={"About"} />
              </ListItem>
            </Link>
            <Link to="/recipes">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ListItemText primary={"Recipes"} />
              </ListItem>
            </Link>
            <Link to="/contact">
              <ListItem
                button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ListItemText primary={"Contact"} />
              </ListItem>
            </Link>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
