import React from "react";
import {
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  Datagrid,
  TextField,
  EditButton,
  List
} from "react-admin";

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = props => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);
