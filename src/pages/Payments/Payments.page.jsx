import './Payments.styles.css';
import React from 'react';

import mockedData from './payments-mock.json';
import PaymentsTable from '../../components/PaymentsTable';
import { PAYMENT_HEADERS } from '../../utils/constants';

const { items } = mockedData;

const PaymentsPage = () => {
  return (
    <section className="paymentspage">
      <h1>Payments</h1>
      <PaymentsTable payments={items} headers={PAYMENT_HEADERS} />
    </section>
  );
};

export default PaymentsPage;
