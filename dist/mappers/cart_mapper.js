"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemMapper = void 0;
const cart_1 = __importStar(require("../models/cart"));
const product_mapper_1 = __importDefault(require("./product_mapper"));
class CartMapper {
    constructor() {
        this.cartItemMapper = new CartItemMapper();
    }
    toCart(backendCart) {
        return new cart_1.default(backendCart.user_id, backendCart.items.map((value) => this.cartItemMapper.toCartItem(value)));
    }
    toBackendCart(cart) {
        return {
            user_id: cart.userId,
            items: cart.items.map((value) => this.cartItemMapper.toBackendCartItem(value))
        };
    }
}
exports.default = CartMapper;
class CartItemMapper {
    constructor() {
        this.productMapper = new product_mapper_1.default();
    }
    toCartItem(backendCartItem) {
        return new cart_1.CartItem(this.productMapper.toProduct(backendCartItem.product), backendCartItem.quantity);
    }
    toBackendCartItem(cartItem) {
        return {
            product: this.productMapper.toBackendProduct(cartItem.product),
            quantity: cartItem.quantity
        };
    }
}
exports.CartItemMapper = CartItemMapper;
//# sourceMappingURL=cart_mapper.js.map