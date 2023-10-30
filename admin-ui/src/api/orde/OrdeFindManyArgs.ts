import { OrdeWhereInput } from "./OrdeWhereInput";
import { OrdeOrderByInput } from "./OrdeOrderByInput";

export type OrdeFindManyArgs = {
  where?: OrdeWhereInput;
  orderBy?: Array<OrdeOrderByInput>;
  skip?: number;
  take?: number;
};
