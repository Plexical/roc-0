import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../screens/app';
import Start from '../screens/start';
import About from '../screens/about';
import Contact from '../screens/contact';

import injectTapEventPlugin from 'react-tap-event-plugin';

export default () => {
  injectTapEventPlugin();
  return (<Route component={ App }>
    <IndexRoute component={ Start } />
    <Route component={ About } path="/about/" />
    <Route component={ Contact } path="/contact/" />
  </Route>)
};
