import './Admin.styles.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

const AdminPage = () => {
  const { authenticated } = useAuth();
  const history = useHistory();

  if (!authenticated) {
    history.push('/notfound');
  }
  return (
    <section className="adminpage">
      <h1>AdminPage</h1>
    </section>
  );
};

export default AdminPage;
