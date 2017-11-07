// ==== Node Modules
import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// ==== Local Files
import { HelmetHead } from '../../containers';
import { Header, Footer } from '../../components';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
});

function Layout(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Header/>
        <Toolbar>
          <Typography type="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// class Layout extends React.Component {
//
//   render() {
//     const { children } = this.props;
//     return (
//       <div>
//         <HelmetHead />
//         <Header />
//         <div>
//           {'children'}
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// Layout.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default withStyles(styles)(Layout);