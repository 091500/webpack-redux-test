// ==== Node Modules
import React from 'react';
import Paper from 'material-ui/Paper';
// ==== Local Files

const style = {
  width: '80%',
  height: 100,
  textAlign: 'center',
  display: 'inline-block',
};

class Footer extends React.Component {

  render() {
    return (
      <Paper style={style} zdepth={1}>
        footer
      </Paper>

    );
  }
}

export default Footer;