import fetch from "cross-fetch";


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
  public openRazorpayPaymentPortal = (orderId: string, amount: number) => {
    const r: Promise<any> = new Promise<any>(
      (resolve, reject) => {
        console.log(`CustomLog: Opening Razorpay Portal for orderId ${orderId} and amount of ${amount}`);
  
      const options = {
        "key" : "rzp_test_1hrXSB3kRQMgLu",
        "order_id" : orderId,
        "amount" : amount,
        "currency" : "INR",
        "name" : "Yamin and Co.",
        "description" : "Test Transcation",
        "image" : "https://images.fastcompany.net/image/upload/fc/3034007-inline-i-applelogo.jpg",
        "prefill" : {
          "name" : "Yamin Nather",
          "email" : "2001s.yn@gmail.com",
          "contact" : "7598385116"
        },
        handler: (response: any) => {
          resolve(response);
        }
      };
  
      // @ts-ignore
      const razorpayOverlay = new Razorpay(options);
      razorpayOverlay.on(
        "payment.failed", 
        (response: any) => {
          reject(new Error("Razorpay payment failed"));
        }
      );
      razorpayOverlay.open();
      }
    )
    
    return r;
  }
}