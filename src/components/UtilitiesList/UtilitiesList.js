import React from "react";
import { List, Datagrid, TextField, DateField, EditButton } from "react-admin";

export const EmailsList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="code" />
      <EditButton />
    </Datagrid>
  </List>
);

export default EmailsList;
