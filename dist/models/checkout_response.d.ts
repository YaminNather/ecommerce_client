export default interface CheckoutResponse {
    "id": string;
    "entity": string;
    "amount": number;
    "amount_paid": number;
    "amount_due": number;
    "currency": string;
    "receipt": string;
    "offer_id": string | null;
    "status": string;
    "attempts": number;
    "notes": any;
    "created_at": number;
}
//# sourceMappingURL=checkout_response.d.ts.map