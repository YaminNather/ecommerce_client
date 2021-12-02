export type DiscountTypes = "cash" | "percentage";

export default interface Discount {
  type: DiscountTypes;
  amount: number;
  formatted: string;
}