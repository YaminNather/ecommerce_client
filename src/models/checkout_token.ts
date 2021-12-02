import Cart from "./cart";

export default interface CheckoutToken {
  id: string;
  user_id: string;
  cart: Cart;
}