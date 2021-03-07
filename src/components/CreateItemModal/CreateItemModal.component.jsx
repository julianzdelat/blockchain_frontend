import React, { useState } from 'react';
import { Button, Checkbox, Modal } from 'semantic-ui-react';

import {
  Column,
  Form,
  FormGroup,
  Strong,
  Input,
  Row,
  CheckboxContainer,
} from './CreateItemModal.styles';

const CreateItemModal = ({ open, setOpen }) => {
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
      <Modal.Header>Create New Item</Modal.Header>
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
                <Strong>Price </Strong>
                <Input
                  required
                  type="number"
                  value={data.UnitPrice || 0}
                  onChange={(e) => setData({ ...data, UnitPrice: e.target.value })}
                />
              </FormGroup>
            </Column>
          </Row>
          <FormGroup>
            <Strong>Description </Strong>
            <textarea
              required
              type="text"
              value={data.Description || ''}
              onChange={(e) => setData({ ...data, Description: e.target.value })}
            />
          </FormGroup>
          <Row>
            <Column>
              <FormGroup>
                <Strong>Inventory </Strong>
                <Input
                  required
                  type="number"
                  value={data.Inventory || 0}
                  onChange={(e) => setData({ ...data, Inventory: e.target.value })}
                />
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <CheckboxContainer compact>
                  <Checkbox
                    label="IsAgeNeeded"
                    checked={data.IsAgeNeeded || false}
                    onChange={() => setData({ ...data, IsAgeNeeded: !data.IsAgeNeeded })}
                  />
                </CheckboxContainer>
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

export default CreateItemModal;
