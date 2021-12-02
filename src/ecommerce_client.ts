import Authentication from "./authentication/authentication";
import Inventory from "./inventory/inventory";
import Carts from "./customer_details/carts";
import Checkout from "./checkout/checkout";

export default class ECommerceClient {  
  public readonly inventory: Inventory = new Inventory();
  public readonly authentication: Authentication = new Authentication();
  public readonly carts: Carts = new Carts();
  public readonly checkout: Checkout = new Checkout();
}