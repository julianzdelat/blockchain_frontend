import './Items.styles.css';
import React from 'react';

import mockedData from './items-mock.json';
import ItemsTable from '../../components/ItemsTable';
import { ITEM_HEADERS } from '../../utils/constants';

const { items } = mockedData;

const ItemsPage = () => {
  return (
    <section className="itemspage">
      <h1>Items</h1>
      <ItemsTable items={items} headers={ITEM_HEADERS} />
    </section>
  );
};

export default ItemsPage;
