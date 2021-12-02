"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../models/product"));
class ProductMapper {
    toProduct(data) {
        return new product_1.default({
            id: data["id"], productName: data["product_name"], brand: data["brand"], description: data["description"],
            arrivalTime: data["arrival_time"], stock: data["stock"], originalPrice: data["price"],
            discountType: (data.discount != null) ? data.discount.type : null,
            discountAmount: (data.discount != null) ? data.discount.amount : null,
            images: data["images"], videos: data["videos"], variantOf: data["variant_of"]
        });
    }
    toBackendProduct(product) {
        var discount;
        if (product.discount == null)
            discount = null;
        else
            discount = { type: product.discount.type, amount: product.discount.amount };
        return {
            id: product.id,
            product_name: product.productName,
            brand: product.brand,
            description: product.description,
            arrival_time: product.arrivalTime,
            stock: product.stock,
            price: product.originalPrice.raw,
            discount: discount,
            images: product.images,
            videos: product.videos,
            variant_of: product.variantOf
        };
    }
}
exports.default = ProductMapper;
//# sourceMappingURL=product_mapper.js.map