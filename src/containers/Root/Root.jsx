// ==== Node Modules
import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
// ==== Local Files
import getRoutes from 'routes';

const muiTheme = createMuiTheme();
const history = createHistory()

class Root extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <ConnectedRouter history={history}>
            {getRoutes()}
          </ConnectedRouter>
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