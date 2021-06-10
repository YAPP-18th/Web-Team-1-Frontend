import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '#styles/index';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import EditorPage from '#pages/EditorPage';
import ViewPage from '#pages/ViewPage';
import ArticleDetailPage from '#pages/ArticleDetailPage';
import ArticleCreatePage from '#pages/ArticleCreatePage';
import ArticleUpdatePage from '#pages/ArticleUpdatePage';

import Alert from '#components/Alert';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/editor" component={EditorPage} />
        <Route exact path="/view" component={ViewPage} />
        <Route exact path="/articleDetail/:id" component={ArticleDetailPage} />
        <Route exact path="/articleCreate" component={ArticleCreatePage} />
        <Route exact path="/articleUpdate" component={ArticleUpdatePage} />
        {/* <Route exact path="/me" component={MyPage} /> */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
