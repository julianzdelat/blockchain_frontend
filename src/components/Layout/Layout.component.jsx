import './Layout.styles.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import {
  ADMIN_ICON,
  ADMIN_ROUTE,
  HOME_ICON,
  HOME_ROUTE,
  ITEMS_ICON,
  ITEMS_ROUTE,
  PAYMENTS_ICON,
  PAYMENTS_ROUTE,
} from '../../utils/constants';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const { admin, employee } = useAuth();
  const history = useHistory();

  const goPage = (route) => {
    history.push(`${route}`);
    setVisible(false);
  };

  return (
    <>
      <Sidebar.Pushable className="back-color">
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
            <Menu.Item onClick={() => goPage(HOME_ROUTE)} as="a">
              <Icon name={HOME_ICON} />
              Home
            </Menu.Item>
          ) : null}
          {admin ? (
            <>
              <Menu.Item onClick={() => goPage(HOME_ROUTE)} as="a">
                <Icon name={HOME_ICON} />
                Home
              </Menu.Item>
              <Menu.Item as="a" onClick={() => goPage(ADMIN_ROUTE)}>
                <Icon name={ADMIN_ICON} />
                Admin
              </Menu.Item>
              <Menu.Item onClick={() => goPage(ITEMS_ROUTE)} as="a">
                <Icon name={ITEMS_ICON} />
                Items
              </Menu.Item>
              <Menu.Item onClick={() => goPage(PAYMENTS_ROUTE)} as="a">
                <Icon name={PAYMENTS_ICON} />
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
