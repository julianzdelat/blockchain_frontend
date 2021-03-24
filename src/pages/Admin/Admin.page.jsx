import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

import mockedData from './users-mock.json';
import CreateUserModal from '../../components/CreateUserModal';
import UsersTable from '../../components/UsersTable';
import { USER_HEADERS } from '../../utils/constants';
import { Container, Button, Title } from './Admin.styles';

const { users } = mockedData;

const AdminPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Title>Clients</Title>
      <Button type="button" onClick={() => setOpenModal(true)}>
        <Icon name="add" size="small" /> New Client
      </Button>
      <UsersTable users={users} headers={USER_HEADERS} />
      <CreateUserModal open={openModal} setOpen={setOpenModal} />
    </Container>
  );
};

export default AdminPage;
