import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  const { worker } = require('./mocks/browser');
  worker.start();
}

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
