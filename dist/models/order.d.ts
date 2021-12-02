import Price from "./price";
export declare type PaymentStatusOptions = "ongoing" | "online" | "post_delivery";
export declare type OrderStatusOptions = "ongoing" | "cancelled" | "completed";
export interface OrderItem {
    id: string;
    product_name: string;
    brand: string;
    original_price: Price;
    final_price: Price;
    images: string[];
    quantity: number;
}
export default interface Order {
    id: string;
    user_id: string;
    items: OrderItem[];
    original_price: Price;
    final_price: Price;
    address: string;
    arrival_date: Date;
    ordered_date: Date;
    payment_status: PaymentStatusOptions;
    order_status: OrderStatusOptions;
}
//# sourceMappingURL=order.d.ts.map