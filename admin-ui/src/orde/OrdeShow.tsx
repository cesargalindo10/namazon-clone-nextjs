import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { ORDE_TITLE_FIELD } from "./OrdeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrdeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="paymentintent" source="paymentintent" />
        <BooleanField label="paymentStatus" source="paymentStatus" />
        <TextField label="price" source="price" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Product"
          target="ordeId"
          label="products"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="colors" source="colors" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="discountedPrice" source="discountedPrice" />
            <TextField label="ID" source="id" />
            <TextField label="images" source="images" />
            <ReferenceField label="ordes" source="orde.id" reference="Orde">
              <TextField source={ORDE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <TextField label="titlePrice" source="titlePrice" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="variants" source="variants" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
