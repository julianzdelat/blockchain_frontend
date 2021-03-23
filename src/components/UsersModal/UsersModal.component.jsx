import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';

import { Column, Form, FormGroup, Strong, Input, Row } from './UsersModal.styles';

const UsersModal = ({ user, setOpen, open }) => {
  const [data, setData] = useState(user);

  useEffect(() => {
    setData(user);
  }, [user]);

  return (
    <Modal closeIcon onClose={() => setOpen(false)} open={open}>
      <Modal.Header>Edit {user.Name}</Modal.Header>
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
                  value={data.LastName || ''}
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
                  value={data.Email || ''}
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
                  value={data.Password || 0}
                  onChange={(e) => setData({ ...data, Password: e.target.value })}
                />
              </FormGroup>
            </Column>
          </Row>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" type="submit" onClick={() => setOpen(false)}>
          Save
        </Button>
        <Button color="red" type="button" onClick={() => setOpen(false)}>
          Delete
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UsersModal;
