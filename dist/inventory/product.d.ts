export declare type DiscountTypeOptions = "percentage" | "cash";
export declare class Price {
    constructor(price: number);
    readonly raw: number;
    readonly formattedWithSymbol: string;
    readonly formattedWithCode: string;
}
export declare class Discount {
    constructor(type: DiscountTypeOptions, amount: number);
    readonly type: DiscountTypeOptions;
    readonly amount: number;
    readonly formatted: string;
}
export declare class Product {
    constructor(args: {
        id: string;
        productName: string;
        brand: string;
        description: string;
        arrivalTime: Date;
        stock: number;
        originalPrice: number;
        discountType: DiscountTypeOptions | null;
        discountAmount: number | null;
        images: string[];
        videos: string[];
        variantOf: string | null;
    });
    readonly id: string;
    readonly productName: string;
    readonly brand: string;
    readonly description: string;
    readonly arrivalTime: Date;
    readonly stock: number;
    readonly originalPrice: Price;
    readonly discount: Discount | null;
    readonly discountedPrice: Price | null;
    readonly images: string[];
    readonly videos: string[];
    readonly variantOf: string | null;
}
//# sourceMappingURL=product.d.ts.map