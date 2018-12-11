import React from "react";
import { List, Datagrid, TextField, DateField, EditButton } from "react-admin";

export const EmailsList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <DateField source="createdAt" />
      <TextField source="subject" />
      <TextField source="content" />
      <EditButton />
    </Datagrid>
  </List>
);

export default EmailsList;
