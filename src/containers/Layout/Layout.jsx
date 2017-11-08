// ==== Node Modules
import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// ==== Local Files
import { Header, Footer } from 'components';


function Layout(props) {
  const { classes } = props;
  return (
    <AppBar position="static" color="default">
      <Header/>
      {props.children}
      <Footer/>
    </AppBar>
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

export default Layout;