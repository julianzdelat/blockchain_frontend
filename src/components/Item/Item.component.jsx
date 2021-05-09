import React, { useState, useEffect } from 'react';
import { Button, List } from 'semantic-ui-react';

import { Row, ColLeft, ColRight, Counter } from './Item.styles';

const Item = ({ item, total, setTotal }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (total === 0) {
      setAmount(0);
    }
  }, [total]);

  return (
    <Row>
      <ColLeft>
        <List.Item key={item}>
          <List.Header>
            {item.Name} - ${item.UnitPrice}
          </List.Header>
          <List.Description>{item.Description}</List.Description>
        </List.Item>
      </ColLeft>
      <ColRight>
        <Counter>Total: ${amount * item.UnitPrice}</Counter>
        <Button
          disabled={amount === 0}
          icon="minus"
          onClick={() => {
            setAmount(amount - 1);
            setTotal(total - item.UnitPrice);
          }}
        />
        <Counter>{amount}</Counter>
        <Button
          icon="plus"
          onClick={() => {
            setAmount(amount + 1);
            setTotal(total + item.UnitPrice);
          }}
        />
      </ColRight>
    </Row>
  );
};
export default Item;
