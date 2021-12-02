"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = __importDefault(require("../authentication/authentication"));
const global_data_1 = require("../global_data/global_data");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const razorpay_payment_1 = __importDefault(require("./razorpay_payment"));
const axios_1 = __importDefault(require("axios"));
class Checkout {
    constructor() {
        this.createCheckoutToken = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield cross_fetch_1.default(`${global_data_1.GlobalData.apiDomain}/api/customers/${this.authentication.getToken().user_id}/checkout`, { method: "post" });
            const r = yield response.json();
            return r;
        });
        this.getCheckoutToken = (id) => __awaiter(this, void 0, void 0, function* () {
            const response = yield cross_fetch_1.default(`${global_data_1.GlobalData.apiDomain}/api/customers/${this.authentication.getToken().user_id}/checkout_tokens/${id}`);
            if (response.status >= 400 && response.status < 500)
                return null;
            const r = yield response.json();
            return r;
        });
        this.payForCheckoutToken = (id) => __awaiter(this, void 0, void 0, function* () {
            const response = yield cross_fetch_1.default(`${global_data_1.GlobalData.apiDomain}/api/customers/${this.authentication.getToken().user_id}/checkout_tokens/${id}/payment/`, { method: "post" });
            const razorpayOrder = yield response.json();
            try {
                yield this.razorpayPayment.openRazorpayPaymentPortal(razorpayOrder.id, razorpayOrder.amount);
            }
            catch (e) {
                throw new Error(`Razorpay portal payment failed for checkout token ${id}`);
            }
            return razorpayOrder.id;
        });
        this.captureCheckoutToken = (id, orderId, address) => __awaiter(this, void 0, void 0, function* () {
            const captureResponse = yield axios_1.default(`${global_data_1.GlobalData.apiDomain}/api/customers/${this.authentication.getToken().user_id}/checkout_tokens/${id}/capture`, {
                method: "POST",
                data: {
                    "order_id": orderId,
                    "address": address
                }
            });
            const order = captureResponse.data;
            return order;
        });
        this.authentication = new authentication_1.default();
        this.razorpayPayment = new razorpay_payment_1.default();
    }
}
exports.default = Checkout;
//# sourceMappingURL=checkout.js.map