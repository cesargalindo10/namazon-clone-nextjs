import { Orde as TOrde } from "../api/orde/Orde";

export const ORDE_TITLE_FIELD = "paymentintent";

export const OrdeTitle = (record: TOrde): string => {
  return record.paymentintent?.toString() || String(record.id);
};
