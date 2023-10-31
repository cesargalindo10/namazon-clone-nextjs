import { Orde } from "../orde/Orde";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  isAdmin: boolean | null;
  lastName: string | null;
  ordes?: Array<Orde>;
  reviews?: Array<Review>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
