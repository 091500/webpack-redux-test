// ==== Node Modules
import React from 'react';
import { NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
// ==== Local Files

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <div>
      <Button raised color="primary" className={classes.button} component={NavLink} to="/home">
        Home
      </Button>
      <Button raised className={classes.button} component={NavLink} to="/about">
        About
      </Button>
    </div>
  )
}

export default withStyles(styles)(Header);