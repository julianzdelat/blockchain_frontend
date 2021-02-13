import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AdminPage from '../../pages/Admin';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import Layout from '../Layout';
import NotFound from '../../pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/admin">
              <AdminPage />
            </Route>
            <Route exact path="/admin">
              <AdminPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
