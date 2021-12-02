import BackendProduct from "./backend_product";
export interface BackendCartItem {
    product: BackendProduct;
    quantity: number;
}
export default interface BackendCart {
    user_id: string;
    items: BackendCartItem[];
}
//# sourceMappingURL=backend_cart.d.ts.map