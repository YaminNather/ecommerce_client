import Authentication from "./authentication/authentication";
import Inventory from "./inventory/inventory";
import Token from "./token";
export declare class CommerceClient {
    constructor(args?: {
        token?: Token;
    });
    readonly inventory: Inventory;
    readonly authentication: Authentication;
}
//# sourceMappingURL=commerce_client.d.ts.map