import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

import mockedData from './items-mock.json';
import CreateItemModal from '../../components/CreateItemModal';
import ItemsTable from '../../components/ItemsTable';
import { ITEM_HEADERS } from '../../utils/constants';
import { Container, Button, Title } from './Items.styles';

const { items } = mockedData;

const ItemsPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Title>Items</Title>
      <Button type="button" onClick={() => setOpenModal(true)}>
        <Icon name="add" size="small" /> New Item
      </Button>
      <ItemsTable items={items} headers={ITEM_HEADERS} />
      <CreateItemModal open={openModal} setOpen={setOpenModal} />
    </Container>
  );
};

export default ItemsPage;
