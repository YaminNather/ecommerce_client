import BackendCart, { BackendCartItem } from "../backend_models/backend_cart";
import Cart, { CartItem } from "../models/cart";
export default class CartMapper {
    toCart(backendCart: BackendCart): Cart;
    toBackendCart(cart: Cart): BackendCart;
    private cartItemMapper;
}
export declare class CartItemMapper {
    toCartItem(backendCartItem: BackendCartItem): CartItem;
    toBackendCartItem(cartItem: CartItem): BackendCartItem;
    private productMapper;
}
//# sourceMappingURL=cart_mapper.d.ts.map