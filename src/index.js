import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'sanitize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './containers/App';
import history from './utils/history';
import configureStore from './configureStore';
import { Auth0Provider } from './react-auth0-spa';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
const MOUNT_NODE = document.getElementById('app');

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN}
          client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
          redirect_uri={window.location.origin}
          audience={process.env.REACT_APP_AUTH0_AUDIENCE}
          onRedirectCallback={onRedirectCallback}
        >
          <App />
        </Auth0Provider>
      </Router>
    </Provider>,
    MOUNT_NODE,
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}
