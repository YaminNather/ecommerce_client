"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RazorpayPayment {
    constructor() {
        this.openRazorpayPaymentPortal = (orderId, amount) => {
            const r = new Promise((resolve, reject) => {
                console.log(`CustomLog: Opening Razorpay Portal for orderId ${orderId} and amount of ${amount}`);
                const options = {
                    "key": "rzp_test_1hrXSB3kRQMgLu",
                    "order_id": orderId,
                    "amount": amount,
                    "currency": "INR",
                    "name": "Yamin and Co.",
                    "description": "Test Transcation",
                    "image": "https://images.fastcompany.net/image/upload/fc/3034007-inline-i-applelogo.jpg",
                    "prefill": {
                        "name": "Yamin Nather",
                        "email": "2001s.yn@gmail.com",
                        "contact": "7598385116"
                    },
                    handler: (response) => {
                        resolve(response);
                    }
                };
                // @ts-ignore
                const razorpayOverlay = new Razorpay(options);
                razorpayOverlay.on("payment.failed", (response) => {
                    reject(new Error("Razorpay payment failed"));
                });
                razorpayOverlay.open();
            });
            return r;
        };
    }
}
exports.default = RazorpayPayment;
//# sourceMappingURL=razorpay_payment.js.map