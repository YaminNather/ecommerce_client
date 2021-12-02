import Authentication from "../authentication/authentication";
import { GlobalData } from "../global_data/global_data";
import CheckoutToken from "../models/checkout_token";
import fetch from "cross-fetch";
import RazorpayPayment, { RazorpayOrder } from "./razorpay_payment";
import axios, { AxiosPromise, AxiosResponse } from "axios";
import Order from "../models/order";

export default class Checkout {
  public createCheckoutToken = async () => {
    const response = await fetch(
      `${GlobalData.apiDomain}/api/customers/${this.authentication.getToken()!.user_id}/checkout`,
      { method: "post" }
    );

    const r: CheckoutToken = await response.json();
    return r;
  }

  public getCheckoutToken = async (id: string) => {
    const response = await fetch(
      `${GlobalData.apiDomain}/api/customers/${this.authentication.getToken()!.user_id}/checkout_tokens/${id}`,
    );
    
    if(response.status >= 400 && response.status < 500)
      return null;

    const r: CheckoutToken = await response.json();
    return r;
  };

  public payForCheckoutToken = async (id: string) => {
    const response: Response = await fetch(
      `${GlobalData.apiDomain}/api/customers/${this.authentication.getToken()!.user_id}/checkout_tokens/${id}/payment/`,
      { method: "post" }
    );

    const razorpayOrder: RazorpayOrder = await response.json();
    
    try {
      await this.razorpayPayment.openRazorpayPaymentPortal(razorpayOrder.id, razorpayOrder.amount);
    }
    catch(e) {
      throw new Error(`Razorpay portal payment failed for checkout token ${id}`)
    }
    
    return razorpayOrder.id;
  };
  
  public captureCheckoutToken = async (id: string, orderId: string | null, address: string) => {
    const captureResponse: AxiosResponse = await axios(
      `${GlobalData.apiDomain}/api/customers/${this.authentication.getToken()!.user_id}/checkout_tokens/${id}/capture`,
      {
        method: "POST",
        data: {
          "order_id" : orderId,
          "address" : address
        }      
      }
    );

    const order: Order = captureResponse.data as Order;

    return order;
  };


  private authentication: Authentication = new Authentication();
  private razorpayPayment: RazorpayPayment = new RazorpayPayment();        
}