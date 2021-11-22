import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NarbarCollapse from "./NarbarCollapse";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {}
};

function HeaderNarbar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" className={classes.navigation}>
      <Toolbar>
        {/* <IconButton
          color="inherit"
          aria-label="Menu"
          className={classes.toggleDrawer}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography
          variant="title"
          color="inherit"
          className={classes.appTitle}
        >
          Fresha
        </Typography>
        <NarbarCollapse />
      </Toolbar>
    </AppBar>
  );
}

HeaderNarbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderNarbar);
