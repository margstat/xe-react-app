import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import App from '../pages/App';
import AdsComponent from '../pages/AdsComponent';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div>
    <Route
      path="/"
      component={() => (window.location.pathname !== '/ads' ? <Redirect to={{ pathname: '/add-property' }} /> : null)}
    />
    <Route
      path="/add-property"
      component={App}
    />
    <Route
      path="/ads"
      component={AdsComponent}
    />
  </div>
);
