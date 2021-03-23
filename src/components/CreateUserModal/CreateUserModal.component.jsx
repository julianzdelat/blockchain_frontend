import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';

import { Column, Form, FormGroup, Strong, Input, Row } from './CreateUserModal.styles';

const CreateUserModal = ({ open, setOpen }) => {
  const [data, setData] = useState({});

  const onCloseHandler = () => {
    setOpen(false);
    setData({});
  };

  const onSubmitHandler = () => {
    setOpen(false);
    setData({});
  };

  return (
    <Modal closeIcon onClose={onCloseHandler} open={open}>
      <Modal.Header>Create New User</Modal.Header>
      <Modal.Content>
        <Form>
          <Row>
            <Column>
              <FormGroup>
                <Strong>Name </Strong>
                <Input
                  required
                  type="text"
                  value={data.Name || ''}
                  onChange={(e) => setData({ ...data, Name: e.target.value })}
                />
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <Strong>Last Name </Strong>
                <Input
                  required
                  type="text"
                  value={data.LastName || 0}
                  onChange={(e) => setData({ ...data, LastName: e.target.value })}
                />
              </FormGroup>
            </Column>
          </Row>
          <Row>
            <Column>
              <FormGroup>
                <Strong>Email </Strong>
                <Input
                  required
                  type="email"
                  value={data.Description || ''}
                  onChange={(e) => setData({ ...data, Email: e.target.value })}
                />
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <Strong>Password </Strong>
                <Input
                  required
                  type="password"
                  value={data.Inventory || 0}
                  onChange={(e) => setData({ ...data, Password: e.target.value })}
                />
              </FormGroup>
            </Column>
          </Row>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" type="submit" onClick={onSubmitHandler}>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CreateUserModal;
