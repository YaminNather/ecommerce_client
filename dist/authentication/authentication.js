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
class Authentication {
    constructor() {
        this.signup = (email, password) => __awaiter(this, void 0, void 0, function* () {
            if (this.isLoggedIn())
                throw new Error(`User already logged in`);
            const response = yield cross_fetch_1.default(`${global_data_1.GlobalData.apiDomain}/api/auth/signup?email=${email}&password=${password}`, { method: "POST" });
            if (response.status / 100 == 4)
                throw new Error((yield response.json()).error);
            const responseData = yield response.json();
            localStorage.setItem("token", JSON.stringify(responseData["token"]));
            const parsedToken = JSON.parse(responseData["token"]);
            const r = {
                token: parsedToken,
                user: {
                    id: responseData["user"]["id"],
                    email: responseData["user"]["email"],
                    password: responseData["user"]["password"]
                }
            };
            return r;
        });
        this.login = (email, password) => __awaiter(this, void 0, void 0, function* () {
            if (this.isLoggedIn())
                throw new Error(`User already logged in`);
            const response = yield cross_fetch_1.default(`${global_data_1.GlobalData.apiDomain}/api/auth/login?email=${email}&password=${password}`, { method: "POST" });
            if (response.status >= 400 && response.status < 500)
                throw new Error((yield response.json()).error);
            const responseData = yield response.json();
            localStorage.setItem("token", JSON.stringify(responseData["token"], null, 2));
            const parsedToken = responseData["token"];
            const r = {
                user: {
                    id: responseData["user"]["id"],
                    email: responseData["user"]["email"],
                    password: responseData["user"]["password"]
                },
                token: parsedToken
            };
            return r;
        });
        this.getToken = () => {
            const tokenString = localStorage.getItem("token");
            const token = (tokenString != null) ? JSON.parse(tokenString) : null;
            return token;
        };
    }
    isLoggedIn() {
        return localStorage.getItem("token") != null;
    }
    ;
}
exports.default = Authentication;
//# sourceMappingURL=authentication.js.map