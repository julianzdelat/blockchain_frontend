import React, { useState } from 'react';

import ItemsModal from '../ItemsModal';
import { TableContainer, Row, TableHeader, TableContent } from './ItemsTable.styles';

const ItemsTable = ({ headers, items }) => {
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const renderedHeaders = headers.map((name) => {
    return <TableHeader key={name}>{name}</TableHeader>;
  });
  const renderedItems = items.map((item) => {
    const openModalHandler = (i) => {
      setCurrentItem(i);
      setOpen(true);
    };
    return (
      <Row key={item.Barcode} onClick={() => openModalHandler(item)}>
        <TableContent>{item.Barcode}</TableContent>
        <TableContent>{item.Name}</TableContent>
        <TableContent>{item.UnitPrice}</TableContent>
        <TableContent>{item.Inventory}</TableContent>
        <TableContent>{item.IsAgeNeeded ? '✅' : '❌'}</TableContent>
      </Row>
    );
  });
  return (
    <>
      <TableContainer>
        <tbody>
          <Row>{renderedHeaders}</Row>
          {renderedItems}
        </tbody>
      </TableContainer>
      <ItemsModal open={open} setOpen={setOpen} item={currentItem} />
    </>
  );
};
export default ItemsTable;
