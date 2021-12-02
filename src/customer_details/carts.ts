import fetch from "cross-fetch";
import Authentication from "../authentication/authentication";
import { GlobalData } from "../global_data/global_data";
import Cart from "../models/cart";

export default class Carts {
  public modify = async (productId: string, quantity: number) => {
    if(!this.authentication.isLoggedIn())
      throw new Error("Not logged in");

    const requestBody: string = JSON.stringify(
      {
        "id" : productId,
        "quantity" : quantity
      }
    );

    const response: Response = await fetch(
      `${GlobalData.apiDomain}/api/customers/${this.authentication.getToken()!.user_id}/cart/`,
      {  
        method: "post", 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'        
        },
        body: requestBody
      }
    );

    if(response.status >= 400 && response.status < 499)
      throw new Error(await response.text());

    const r: Cart = await response.json();

    return r;
  };

  public get = async () => {
    if(!this.authentication.isLoggedIn())
      throw new Error("Not logged in");

    const response: Response = await fetch(`${GlobalData.apiDomain}/api/customers/${this.authentication.getToken()!.user_id}/cart/`);

    if(response.status >= 400 && response.status < 499)
      throw new Error(await response.text());
      
    const r: Cart = await response.json();

    return r;
  };


  private authentication: Authentication = new Authentication();
}