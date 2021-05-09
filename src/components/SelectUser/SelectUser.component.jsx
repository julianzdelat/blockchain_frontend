import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const SelectUser = ({ users, setSelectedUser }) => (
  <Dropdown
    placeholder="Select Client"
    fluid
    search
    selection
    options={users}
    onChange={(e, value) => setSelectedUser(value.value)}
  />
);

export default SelectUser;
