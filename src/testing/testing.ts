import ECommerceClient from "../ecommerce_client";
import Cart from "../models/cart";
import Product from "../models/product";

async function main(): Promise<void> {
  console.log("CustomLog: Running");

  const client: ECommerceClient = new ECommerceClient();
  
  const user = await client.authentication.login("test_user@gmail.com", "test_password");

  const cart: Cart = await client.carts.modify("615ba280f5914158b35cb88e", 59);

  console.log(`CustomLog: Cart:\n${JSON.stringify(cart, null, 2)}`);
}


main();