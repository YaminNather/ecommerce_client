import CheckoutToken from "../models/checkout_token";
import Order from "../models/order";
export default class Checkout {
    createCheckoutToken: () => Promise<CheckoutToken>;
    getCheckoutToken: (id: string) => Promise<CheckoutToken | null>;
    payForCheckoutToken: (id: string) => Promise<string>;
    captureCheckoutToken: (id: string, orderId: string | null, address: string) => Promise<Order>;
    private authentication;
    private razorpayPayment;
}
//# sourceMappingURL=checkout.d.ts.map