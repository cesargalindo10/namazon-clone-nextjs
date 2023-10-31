import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrdeWhereUniqueInput } from "../orde/OrdeWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountedPrice?: number;
  images?: InputJsonValue;
  orde?: OrdeWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  title?: string;
  titlePrice?: number;
  variants?: InputJsonValue;
};
