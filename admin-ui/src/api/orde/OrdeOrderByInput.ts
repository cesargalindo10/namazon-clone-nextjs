import { SortOrder } from "../../util/SortOrder";

export type OrdeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentintent?: SortOrder;
  paymentStatus?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
