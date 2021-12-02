import Discount from "./discount";
import Price from "./price";

export default interface Product {
  id: string;
  variant_of?: undefined;
  product_name: string;
  brand: string;
  description: string;
  
  discount: Discount | null;
  original_price: Price;
  discount_price: Price | null;
  final_price: Price;  

  images: string[];
  videos: string[];
  
  arrival_time: Date;
  stock: number;  
}