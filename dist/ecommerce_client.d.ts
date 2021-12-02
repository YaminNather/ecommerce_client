import Authentication from "./authentication/authentication";
import Inventory from "./inventory/inventory";
import Carts from "./customer_details/carts";
import Checkout from "./checkout/checkout";
export default class ECommerceClient {
    readonly inventory: Inventory;
    readonly authentication: Authentication;
    readonly carts: Carts;
    readonly checkout: Checkout;
}
//# sourceMappingURL=ecommerce_client.d.ts.map