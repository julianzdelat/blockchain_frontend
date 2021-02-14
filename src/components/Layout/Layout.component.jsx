import './Layout.styles.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const { authenticated } = useAuth();
  const history = useHistory();

  const goHome = () => {
    history.push('/');
    setVisible(false);
  };

  const goAdmin = () => {
    history.push('/admin');
    setVisible(false);
  };

  return (
    <>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item onClick={goHome} as="a">
            <Icon name="shopping cart" />
            Home
          </Menu.Item>
          {authenticated ? (
            <Menu.Item as="a" onClick={goAdmin}>
              <Icon name="lock" />
              Admin
            </Menu.Item>
          ) : null}
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <Header openSidebar={setVisible} />
          <main className="container">{children}</main>
          <Footer />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default Layout;
