import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonNarbarCollapse from "./ButtonNarbarCollapse";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  root: {
    position: "absolute",
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  }
});

const NarbarCollapse = props => (
  <div className={props.classes.root}>
    <ButtonNarbarCollapse>
        <MenuItem>For Partners</MenuItem>
        <MenuItem>Login</MenuItem>
        <MenuItem>Signup</MenuItem>
    </ButtonNarbarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
        <Button color="inherit">For Partners</Button>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Signup</Button>
        <Button color="inherit"><MenuIcon /></Button>
    </div>
  </div>
);

export default withStyles(styles)(NarbarCollapse);