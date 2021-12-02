export interface RazorpayOrder {
    id: string;
    entity: "order";
    currency: "INR";
    amount: number;
    amount_paid: number;
    amount_due: number;
    receipt: string;
    status: string;
    attempts: number;
    notes: any;
    created_by: number;
}
export default class RazorpayPayment {
    openRazorpayPaymentPortal: (orderId: string, amount: number) => Promise<any>;
}
//# sourceMappingURL=razorpay_payment.d.ts.map