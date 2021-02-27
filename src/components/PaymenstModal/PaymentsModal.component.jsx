import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';

import { Form, FormGroup, Strong, Input } from './PaymentsModal.styles';

const PaymentsModal = ({ payment, setOpen, open }) => {
  const [data, setData] = useState(payment);

  useEffect(() => {
    setData(payment);
  }, [payment]);

  return (
    <Modal closeIcon onClose={() => setOpen(false)} open={open}>
      <Modal.Header>Edit {payment.Name}</Modal.Header>
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

export default PaymentsModal;
