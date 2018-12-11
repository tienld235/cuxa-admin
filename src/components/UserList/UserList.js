import React from "react";
import { List, Datagrid, TextField, EmailField, EditButton } from "react-admin";

export const UserList = props => {
  return (
    <div>
      <List {...props}>
        <Datagrid rowClick="edit">
          {/* <TextField source="id" /> */}
          <TextField source="name" />
          {/* <TextField source="picture" /> */}
          <EmailField source="email" />
          <EditButton />
        </Datagrid>
      </List>

    </div>
  );
};

export default UserList;
