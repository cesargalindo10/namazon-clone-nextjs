import { ProductCreateNestedManyWithoutOrdesInput } from "./ProductCreateNestedManyWithoutOrdesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrdeCreateInput = {
  paymentintent?: string | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductCreateNestedManyWithoutOrdesInput;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
