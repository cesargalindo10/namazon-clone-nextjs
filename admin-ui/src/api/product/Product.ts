import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Orde } from "../orde/Orde";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedPrice: number;
  id: string;
  images: JsonValue;
  orde?: Orde | null;
  reviews?: Array<Review>;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  variants: JsonValue;
};
