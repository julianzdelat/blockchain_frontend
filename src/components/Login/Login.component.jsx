import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

const Login = ({ open, setOpen }) => {
  const { login } = useAuth();

  function authenticate(event) {
    event.preventDefault();
    login();
    setOpen(false);
  }

  return (
    <div className="login">
      <Modal
        closeIcon
        dimmer="blurring"
        size="mini"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <form onSubmit={authenticate} className="login-form">
            <div className="form-group">
              <label htmlFor="username">
                <strong>username </strong>
                <input required type="text" id="username" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <strong>password </strong>
                <input required type="password" id="password" />
              </label>
            </div>
            <Button color="green" type="submit">
              Login
            </Button>
          </form>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Login;
