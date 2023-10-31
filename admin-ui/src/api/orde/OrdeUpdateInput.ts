import { ProductUpdateManyWithoutOrdesInput } from "./ProductUpdateManyWithoutOrdesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrdeUpdateInput = {
  paymentintent?: string | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductUpdateManyWithoutOrdesInput;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
