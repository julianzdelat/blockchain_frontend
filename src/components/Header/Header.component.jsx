import './Header.styles.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Menu, Dropdown } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import Login from '../Login';

const Header = ({ openSidebar }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const { authenticated, logout } = useAuth();

  const deAuthenticate = () => {
    logout();
    history.push('/');
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
          <Dropdown icon="user circle big" className="link icon item">
            <Dropdown.Menu>
              {!authenticated ? (
                <Dropdown.Item onClick={() => setOpen(true)}>login</Dropdown.Item>
              ) : (
                <Dropdown.Item onClick={deAuthenticate}>logout</Dropdown.Item>
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
