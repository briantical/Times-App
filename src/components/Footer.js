//This is the footer component of the application
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  appBar: {
    top: "auto",
    bottom: 0
  },
  menuButton: {
    marginLeft: -12,
    marginRight: -12
  },
  actionButtons: {
    marginLeft: "auto"
  }
};

function BottomAppBar({ classes }) {
  return (
    <div style={{paddingTop: '36px'}}>
    
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        
          <Typography>
          <center>
            <b style={{color:'white'}}>Copyright - 2019</b>
            <p style={{color:'white'}}><strong>Dorothy Joy Nansubuga -- Rodney Mathias Ssentamu -- Brian Ivan Lutaaya</strong></p>
            </center>
          </Typography>
        
      </AppBar>
    
    </div>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
