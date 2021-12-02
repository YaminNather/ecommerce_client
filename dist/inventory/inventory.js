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
const global_data_1 = require("../global_data/global_data");
class Inventory {
    constructor() {
        this.getNewestArrivalProducts = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield cross_fetch_1.default(`${global_data_1.GlobalData.apiDomain}/api/products/?min_time=2021-10-03`);
            const r = yield response.json();
            return r;
        });
        this.getProduct = (id) => __awaiter(this, void 0, void 0, function* () {
            const response = yield cross_fetch_1.default(`${global_data_1.GlobalData.apiDomain}/api/products/${id}`);
            const r = yield response.json();
            return r;
        });
        this.getAllProducts = (query) => __awaiter(this, void 0, void 0, function* () {
            const url = new URL(`${global_data_1.GlobalData.apiDomain}/api/products/`);
            if (query != undefined) {
                if (query.minPrice != undefined)
                    url.searchParams.append("min_price", query.minPrice.toString());
                if (query.maxPrice != undefined)
                    url.searchParams.append("max_price", query.maxPrice.toString());
                if (query.categories != undefined) {
                    for (const category of query.categories)
                        url.searchParams.append("categories", category);
                }
            }
            console.log(`CustomLog: Final Url = ${url.href}`);
            const response = yield cross_fetch_1.default(url.href);
            const r = yield response.json();
            return r;
        });
        this.randomFunction = () => { };
    }
}
exports.default = Inventory;
//# sourceMappingURL=inventory.js.map