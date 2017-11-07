// ==== Node Modules
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// ==== Local Files
import getRoutes from '../../routes';

class Root extends React.Component {
  render() {
    const { history, store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          {getRoutes()}
        </Router>
      </Provider>
    );
  }
}

// Root.propTypes = {
//   history: PropTypes.object.isRequired,
//   store: PropTypes.object.isRequired,
// };

export default Root;