"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommerceClient = void 0;
var authentication_1 = __importDefault(require("./authentication/authentication"));
var global_data_1 = require("./global_data/global_data");
var inventory_1 = __importDefault(require("./inventory/inventory"));
var CommerceClient = /** @class */ (function () {
    function CommerceClient(args) {
        var _a;
        this.inventory = new inventory_1.default();
        this.authentication = new authentication_1.default();
        if (args == undefined)
            global_data_1.globalData.token = null;
        else
            global_data_1.globalData.token = (_a = args.token) !== null && _a !== void 0 ? _a : null;
    }
    return CommerceClient;
}());
exports.CommerceClient = CommerceClient;
//# sourceMappingURL=commerce_client.js.map