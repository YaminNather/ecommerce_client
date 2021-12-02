import Product from "./product";
import Price from "./price";

export interface CartItem {
  product: Product;
  quantity: number;

  original_price: Price;  
  final_price: Price;
}

export default interface Cart {
  user_id: string;
  items: CartItem[];

  original_price: Price;
  final_price: Price;
}