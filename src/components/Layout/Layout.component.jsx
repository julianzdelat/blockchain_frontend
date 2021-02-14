import './Layout.styles.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const { admin, employee } = useAuth();
  const history = useHistory();

  console.log(admin, employee);

  const goPage = (route) => {
    history.push(`/${route}`);
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
          {employee ? (
            <Menu.Item onClick={() => goPage('')} as="a">
              <Icon name="shopping cart" />
              Home
            </Menu.Item>
          ) : null}
          {admin ? (
            <>
              <Menu.Item onClick={() => goPage('')} as="a">
                <Icon name="shopping cart" />
                Home
              </Menu.Item>
              <Menu.Item as="a" onClick={() => goPage('admin')}>
                <Icon name="lock" />
                Admin
              </Menu.Item>
              <Menu.Item onClick={() => goPage('items')} as="a">
                <Icon name="table" />
                Items
              </Menu.Item>
              <Menu.Item onClick={() => goPage('payments')} as="a">
                <Icon name="payment" />
                Payments
              </Menu.Item>
            </>
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
