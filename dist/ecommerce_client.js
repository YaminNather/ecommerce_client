"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = __importDefault(require("./authentication/authentication"));
const inventory_1 = __importDefault(require("./inventory/inventory"));
const carts_1 = __importDefault(require("./customer_details/carts"));
const checkout_1 = __importDefault(require("./checkout/checkout"));
class ECommerceClient {
    constructor() {
        this.inventory = new inventory_1.default();
        this.authentication = new authentication_1.default();
        this.carts = new carts_1.default();
        this.checkout = new checkout_1.default();
    }
}
exports.default = ECommerceClient;
//# sourceMappingURL=ecommerce_client.js.map