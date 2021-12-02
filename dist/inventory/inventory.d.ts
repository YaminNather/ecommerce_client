import Product from "../models/product";
export default class Inventory {
    getNewestArrivalProducts: () => Promise<Product[]>;
    getProduct: (id: string) => Promise<Product>;
    getAllProducts: (query?: {
        minPrice?: number | undefined;
        maxPrice?: number | undefined;
        categories?: string[] | undefined;
    } | undefined) => Promise<Product[]>;
    randomFunction: () => void;
}
//# sourceMappingURL=inventory.d.ts.map