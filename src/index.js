import React from 'react';
import ReactDOM from 'react-dom';
import { MarauderProvider } from 'marauder';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Wrap the <App> in a <MarauderProvider> and pass in an optional
// `config` object. For a complete list of options, see below:
// https://github.com/tannerlinsley/react-query#options

const config = {
  staleTime: 1000 * 60 * 5,
};

ReactDOM.render(
  <MarauderProvider config={config}>
    <App />
  </MarauderProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
