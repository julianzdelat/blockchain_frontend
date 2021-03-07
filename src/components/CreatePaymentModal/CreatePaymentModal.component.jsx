import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';

import { Form, FormGroup, Strong, Input } from './CreatePaymentModal.styles';

const CreatePaymentModal = ({ open, setOpen }) => {
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
      <Modal.Header>Create New Payment Type</Modal.Header>
      <Modal.Content>
        <Form>
          <FormGroup>
            <Strong>Name </Strong>
            <Input
              required
              type="text"
              value={data.Name || ''}
              onChange={(e) => setData({ ...data, Name: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Strong>Description </Strong>
            <textarea
              required
              type="text"
              value={data.Description || ''}
              onChange={(e) => setData({ ...data, Description: e.target.value })}
            />
          </FormGroup>
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

export default CreatePaymentModal;
