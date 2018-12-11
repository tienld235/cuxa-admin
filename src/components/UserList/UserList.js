import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  ImageField
} from "react-admin";
import AvatarField from "../AvatarField";

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <AvatarField source="picture" title="name" />
      <TextField source="name" />
      <EmailField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

export default UserList;
