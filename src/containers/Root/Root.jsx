// ==== Node Modules
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles'
// ==== Local Files
import getRoutes from 'routes';

const muiTheme = createMuiTheme();

class Root extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <BrowserRouter>
            {getRoutes()}
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

// Root.propTypes = {
//   history: PropTypes.object.isRequired,
//   store: PropTypes.object.isRequired,
// };

export default Root;