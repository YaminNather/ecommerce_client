import { DiscountTypeOptions } from "../models/product";
export interface BackendDiscount {
    type: DiscountTypeOptions | null;
    amount: number;
}
export default interface BackendProduct {
    id: string;
    product_name: string;
    brand: string;
    description: string;
    arrival_time: Date;
    stock: number;
    price: number;
    discount: BackendDiscount | null;
    images: string[];
    videos: string[];
    variant_of: string | null;
}
//# sourceMappingURL=backend_product.d.ts.map