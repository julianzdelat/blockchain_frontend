import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

import mockedData from './payments-mock.json';
import CreatePaymentModal from '../../components/CreatePaymentModal';
import PaymentsTable from '../../components/PaymentsTable';
import { PAYMENT_HEADERS } from '../../utils/constants';
import { Button, Container, Title } from './Payments.styles';

const { items } = mockedData;

const PaymentsPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Title>Payments</Title>
      <Button type="button" onClick={() => setOpenModal(true)}>
        <Icon name="add" size="small" /> New Payment Type
      </Button>
      <PaymentsTable payments={items} headers={PAYMENT_HEADERS} />
      <CreatePaymentModal open={openModal} setOpen={setOpenModal} />
    </Container>
  );
};

export default PaymentsPage;
