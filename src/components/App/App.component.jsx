import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AdminPage from '../../pages/Admin';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import ItemsPage from '../../pages/Items/Items.page';
import Layout from '../Layout';
import NotFound from '../../pages/NotFound';
import PaymentsPage from '../../pages/Payments';
import Private from '../Private';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Private exact path="/admin">
              <AdminPage />
            </Private>
            <Private exact path="/items">
              <ItemsPage />
            </Private>
            <Private exact path="/payments">
              <PaymentsPage />
            </Private>
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
