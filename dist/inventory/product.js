"use strict";
// export class Price {
//   public constructor(raw: number) {
//     this.raw = raw;
//     this.formattedWithSymbol = `$${raw}`;
//     this.formattedWithCode = `${raw} INR`;
//   }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.Discount = exports.Price = void 0;
var Price = /** @class */ (function () {
    function Price(price) {
        this.raw = price;
        this.formattedWithCode = price + " INR";
        this.formattedWithSymbol = "$" + price;
    }
    return Price;
}());
exports.Price = Price;
var Discount = /** @class */ (function () {
    function Discount(type, amount) {
        this.type = type;
        this.amount = amount;
        switch (type) {
            case "cash":
                this.formatted = amount + " INR";
                break;
            case "percentage":
                this.formatted = amount + "%";
                break;
            default:
                throw new Error("InvalidDiscountTypeError: " + type + " is not a valid Discount Type");
        }
    }
    return Discount;
}());
exports.Discount = Discount;
var Product = /** @class */ (function () {
    function Product(args) {
        this.id = args.id;
        this.productName = args.productName;
        this.brand = args.brand;
        this.description = args.description;
        this.arrivalTime = args.arrivalTime;
        this.stock = args.stock;
        this.originalPrice = new Price(args.originalPrice);
        if (args.discountType != null) {
            this.discount = new Discount(args.discountType, args.discountAmount);
            switch (args.discountType) {
                case "cash":
                    this.discountedPrice = new Price(args.originalPrice - args.discountAmount);
                    break;
                case "percentage":
                    this.discountedPrice = new Price(args.originalPrice * (100 - args.discountAmount) / 100);
                    break;
                default:
                    throw new Error("InvalidDiscountTypeError: " + args.discountType + " is not a valid Discount Type");
            }
        }
        else {
            this.discount = null;
            this.discountedPrice = null;
        }
        this.images = args.images;
        this.videos = args.videos;
        this.variantOf = args.variantOf;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map