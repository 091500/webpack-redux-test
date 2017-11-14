// ==== Node Modules
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// ==== Local Files
import { Header, Footer } from 'components';
import { HelmetHead } from 'containers';

function Layout(props) {
  const { classes } = props;

  return (
    <AppBar position="static" color="default">
      <HelmetHead />
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