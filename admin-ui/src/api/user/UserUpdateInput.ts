import { OrdeUpdateManyWithoutUsersInput } from "./OrdeUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  isAdmin?: boolean | null;
  lastName?: string | null;
  ordes?: OrdeUpdateManyWithoutUsersInput;
  password?: string;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
