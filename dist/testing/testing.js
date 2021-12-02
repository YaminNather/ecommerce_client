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
const ecommerce_client_1 = __importDefault(require("../ecommerce_client"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("CustomLog: Running");
        const client = new ecommerce_client_1.default();
        const user = yield client.authentication.login("test_user@gmail.com", "test_password");
        const cart = yield client.carts.modify("615ba280f5914158b35cb88e", 59);
        console.log(`CustomLog: Cart:\n${JSON.stringify(cart, null, 2)}`);
    });
}
main();
//# sourceMappingURL=testing.js.map