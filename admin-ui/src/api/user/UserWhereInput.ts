import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrdeListRelationFilter } from "../orde/OrdeListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isAdmin?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  ordes?: OrdeListRelationFilter;
  reviews?: ReviewListRelationFilter;
  username?: StringFilter;
};
