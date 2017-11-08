// ==== Node Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// ==== Local Files
import Root from './containers/Root/Root';
import configureStore from './store/configureStore';

// ==== Local Variables
const initialState = {};
const store = configureStore(initialState);
const rootEl = document.getElementById('root');

ReactDOM.render(<Root store={store} />, rootEl);

if (__DEVELOPMENT__ && module.hot) {
  module.hot.accept([
    './containers/Root/Root', // Same path as imported above
  ], () => {
    ReactDOM.render(
      <AppContainer>
        <Root store={store} />
      </AppContainer>,
      rootEl,
    );
  });
}
