import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import routing from './helpers/rooting';
import history from './helpers/history';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      {routing()}
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
