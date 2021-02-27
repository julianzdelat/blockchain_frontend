import React, { useState } from 'react';

import PaymentsModal from '../PaymenstModal';
import { TableContainer, Row, TableHeader, TableContent } from './PaymentsTable.styles';

const PaymentsTable = ({ headers, payments }) => {
  const [open, setOpen] = useState(false);
  const [currentPayment, setCurrentPayment] = useState({});

  const renderedHeaders = headers.map((name) => {
    return <TableHeader key={name}>{name}</TableHeader>;
  });
  const renderedPayments = payments.map((payment) => {
    const openModalHandler = (p) => {
      setCurrentPayment(p);
      setOpen(true);
    };
    return (
      <Row key={payment.Id} onClick={() => openModalHandler(payment)}>
        <TableContent>{payment.Name}</TableContent>
        <TableContent>{payment.Description}</TableContent>
      </Row>
    );
  });
  return (
    <>
      <TableContainer>
        <tbody>
          <Row>{renderedHeaders}</Row>
          {renderedPayments}
        </tbody>
      </TableContainer>
      <PaymentsModal open={open} setOpen={setOpen} payment={currentPayment} />
    </>
  );
};
export default PaymentsTable;
