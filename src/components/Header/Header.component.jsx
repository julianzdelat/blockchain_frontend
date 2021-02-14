import './Header.styles.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Menu, Dropdown } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import { HOME_ROUTE, USER_ICON } from '../../utils/constants';
import Login from '../Login';

const Header = ({ openSidebar }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const { admin, employee, logout } = useAuth();

  useEffect(() => {
    if (admin || employee) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [admin, employee]);

  const deAuthenticate = () => {
    logout();
    history.push(HOME_ROUTE);
    setOpen(true);
  };

  return (
    <>
      <Menu>
        <Menu.Item>
          <Icon className="clickable" name="bars" onClick={() => openSidebar(true)} />
        </Menu.Item>
        <Menu.Item>
          <h1 className="title">Blockchain Project</h1>
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown icon={USER_ICON} className="link icon item">
            <Dropdown.Menu>
              {admin || employee ? (
                <Dropdown.Item onClick={deAuthenticate}>logout</Dropdown.Item>
              ) : (
                <Dropdown.Item onClick={() => setOpen(true)}>login</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
      <Login open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
