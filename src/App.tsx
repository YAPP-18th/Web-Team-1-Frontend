import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
