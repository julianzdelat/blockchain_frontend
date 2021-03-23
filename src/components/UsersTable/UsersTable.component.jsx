import React, { useState } from 'react';

import UsersModal from '../UsersModal';
import { TableContainer, Row, TableHeader, TableContent } from './UsersTable.styles';

const UsersTable = ({ headers, users }) => {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const renderedHeaders = headers.map((name) => {
    return <TableHeader key={name}>{name}</TableHeader>;
  });
  const renderedUsers = users.map((user) => {
    const openModalHandler = (u) => {
      setCurrentUser(u);
      setOpen(true);
    };
    return (
      <Row key={user.Barcode} onClick={() => openModalHandler(user)}>
        <TableContent>{user.Name}</TableContent>
        <TableContent>{user.LastName}</TableContent>
        <TableContent>{user.Email}</TableContent>
      </Row>
    );
  });
  return (
    <>
      <TableContainer>
        <tbody>
          <Row>{renderedHeaders}</Row>
          {renderedUsers}
        </tbody>
      </TableContainer>
      <UsersModal open={open} setOpen={setOpen} user={currentUser} />
    </>
  );
};
export default UsersTable;
