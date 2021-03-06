import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app.jsx';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore.js';

const el = document.getElementById('react');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  el
);

if (module.hot) {
  module.hot.accept('./views/app', () => {
    const NextApp = require('./views/app').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      el
    );
  });
}
