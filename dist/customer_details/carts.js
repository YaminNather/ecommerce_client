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
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const authentication_1 = __importDefault(require("../authentication/authentication"));
const global_data_1 = require("../global_data/global_data");
class Carts {
    constructor() {
        this.modify = (productId, quantity) => __awaiter(this, void 0, void 0, function* () {
            if (!this.authentication.isLoggedIn())
                throw new Error("Not logged in");
            const requestBody = JSON.stringify({
                "id": productId,
                "quantity": quantity
            });
            const response = yield cross_fetch_1.default(`${global_data_1.GlobalData.apiDomain}/api/customers/${this.authentication.getToken().user_id}/cart/`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: requestBody
            });
            if (response.status >= 400 && response.status < 499)
                throw new Error(yield response.text());
            const r = yield response.json();
            return r;
        });
        this.get = () => __awaiter(this, void 0, void 0, function* () {
            if (!this.authentication.isLoggedIn())
                throw new Error("Not logged in");
            const response = yield cross_fetch_1.default(`${global_data_1.GlobalData.apiDomain}/api/customers/${this.authentication.getToken().user_id}/cart/`);
            if (response.status >= 400 && response.status < 499)
                throw new Error(yield response.text());
            const r = yield response.json();
            return r;
        });
        this.authentication = new authentication_1.default();
    }
}
exports.default = Carts;
//# sourceMappingURL=carts.js.map