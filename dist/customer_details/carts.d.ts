import Cart from "../models/cart";
export default class Carts {
    modify: (productId: string, quantity: number) => Promise<Cart>;
    get: () => Promise<Cart>;
    private authentication;
}
//# sourceMappingURL=carts.d.ts.map