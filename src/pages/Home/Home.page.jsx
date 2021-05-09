import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import mockedUsers from './users-mock.json';
import mockedItems from './items-mock.json';
import SelectUser from '../../components/SelectUser';
import Item from '../../components/Item';
import {
  Container,
  Title,
  FinishButton,
  PaymentButton,
  OrderButton,
  UserWrapper,
  Row,
  Col,
  SubTitle,
  Total,
} from './Home.styles';

const { users } = mockedUsers;
const { items } = mockedItems;

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [total, setTotal] = useState(0);
  const [payments, setPayments] = useState(0);

  const usersObject = users.map((user) => {
    return { key: user.Id, value: user.Id, text: `${user.Name} ${user.LastName}` };
  });

  const firstItems = items.slice(0, items.length / 2);
  const lastItems = items.slice(items.length / 2, items.length);

  const cleanOrder = () => {
    setSelectedUser(null);
    setTotal(0);
    setPayments(0);
  };

  const makePayment = () => {
    setPayments(total);
  };

  return (
    <Container>
      <Title>
        Welcome {selectedUser ? usersObject[selectedUser - 1].text : 'to the Store'}
      </Title>
      {selectedUser && (
        <OrderButton>
          <Button
            disabled={payments !== 0}
            basic
            color="blue"
            content="Clean Order"
            onClick={cleanOrder}
          />
        </OrderButton>
      )}
      {!selectedUser && (
        <UserWrapper>
          <SelectUser
            users={usersObject}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </UserWrapper>
      )}
      <SubTitle>Items</SubTitle>
      <Row>
        <Col>
          {firstItems.map((item) => (
            <Item item={item} total={total} setTotal={setTotal} />
          ))}
        </Col>
        <Col>
          {lastItems.map((item) => (
            <Item item={item} total={total} setTotal={setTotal} />
          ))}
        </Col>
      </Row>
      <Total>Total: ${total}</Total>
      <SubTitle>Payments</SubTitle>
      <Total>Pending: ${total - payments}</Total>
      <PaymentButton>
        <Button
          disabled={total === 0 || !selectedUser || payments === total}
          basic
          color="green"
          content="Make Payment"
          onClick={makePayment}
        />
      </PaymentButton>
      {!(total === 0 || !selectedUser || payments !== total) && (
        <FinishButton>
          <Button
            inverted
            fluid
            color="red"
            content="Finish Order"
            onClick={cleanOrder}
          />
        </FinishButton>
      )}
    </Container>
  );
};

export default HomePage;
