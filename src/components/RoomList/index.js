import React from "react";
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EditButton,
  DateField,
  EmailField,
  NumberField,
  ReferenceField
} from "react-admin";

export const RoomList = props => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        {/* <TextField source="id" /> */}
        <DateField source="createdAt" showTime />
        <TextField source="name" />
        <ReferenceField label="Landlord" source="landlord.id" reference="users">
          <TextField source="name" />
        </ReferenceField>

        <EmailField source="landlord.email" />
        <BooleanField source="isVerified" />
        <NumberField
          source="price"
          locales="fr-FR"
          options={{ style: "currency", currency: "VND" }}
        />
        <TextField source="address" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
export default RoomList;
