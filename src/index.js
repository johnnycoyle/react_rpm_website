import 'react-hot-loader/patch';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './containers/App.js'
import { AppContainer } from 'react-hot-loader';

render(
  <AppContainer>
    <App />
  </AppContainer>, document.getElementById('root')
);

if (module.hot && module.hot.accept('./containers/App.js', () => render(App)));