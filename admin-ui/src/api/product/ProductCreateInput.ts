import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrdeWhereUniqueInput } from "../orde/OrdeWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors: InputJsonValue;
  description: InputJsonValue;
  discountedPrice: number;
  images: InputJsonValue;
  orde?: OrdeWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  title: string;
  titlePrice: number;
  variants: InputJsonValue;
};
