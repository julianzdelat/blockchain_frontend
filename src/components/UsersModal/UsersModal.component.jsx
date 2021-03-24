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
                <Strong>Address </Strong>
                <Input
                  required
                  type="text"
                  value={data.Address || ''}
                  onChange={(e) => setData({ ...data, Address: e.target.value })}
                />
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <Strong>City </Strong>
                <Input
                  required
                  type="text"
                  value={data.City || ''}
                  onChange={(e) => setData({ ...data, City: e.target.value })}
                />
              </FormGroup>
            </Column>
          </Row>
          <Row>
            <Column>
              <FormGroup>
                <Strong>State </Strong>
                <Input
                  required
                  type="text"
                  value={data.State || ''}
                  onChange={(e) => setData({ ...data, State: e.target.value })}
                />
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <Strong>Zipcode </Strong>
                <Input
                  required
                  type="text"
                  value={data.Zipcode || ''}
                  onChange={(e) => setData({ ...data, Zipcode: e.target.value })}
                />
              </FormGroup>
            </Column>
          </Row>
          <Row>
            <Column>
              <FormGroup>
                <Strong>Home Phone </Strong>
                <Input
                  required
                  type="text"
                  value={data.HomePhone || ''}
                  onChange={(e) => setData({ ...data, HomePhone: e.target.value })}
                />
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <Strong>Mobile Phone </Strong>
                <Input
                  required
                  type="text"
                  value={data.MobilePhone || ''}
                  onChange={(e) => setData({ ...data, MobilePhone: e.target.value })}
                />
              </FormGroup>
            </Column>
          </Row>
          <Row>
            <Column>
              <FormGroup>
                <Strong>Birthdate </Strong>
                <Input
                  required
                  type="text"
                  value={data.Birthdate || ''}
                  onChange={(e) => setData({ ...data, Birthdate: e.target.value })}
                />
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <Strong>Sex </Strong>
                <Input
                  required
                  type="text"
                  value={data.Sex || ''}
                  onChange={(e) => setData({ ...data, Sex: e.target.value })}
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
