import Token from "../token";
import fetch from "cross-fetch";
import { GlobalData } from "../global_data/global_data";
import User from "../models/user";

export interface AuthenticationResponse {
  token: Token,
  user: User
}

export default class Authentication {
  public signup = async (email: string, password: string) => {
    if(this.isLoggedIn())
      throw new Error(`User already logged in`);
      
    const response: Response = await fetch(
      `${GlobalData.apiDomain}/api/auth/signup?email=${email}&password=${password}`, 
      { method: "POST" }
    );

    if(response.status / 100 == 4)
      throw new Error((await response.json()).error);

    const responseData: any = await response.json();

    localStorage.setItem("token", JSON.stringify(responseData["token"]));
    
    const parsedToken: Token = JSON.parse(responseData["token"]);
    const r: AuthenticationResponse = {
      token: parsedToken,
      user: {
        id: responseData["user"]["id"],
        email: responseData["user"]["email"],
        password: responseData["user"]["password"]
      }
    };

    return r;
  }

  public login = async (email: string, password: string) => {
    if(this.isLoggedIn())
      throw new Error(`User already logged in`);
      
    const response: Response = await fetch(
      `${GlobalData.apiDomain}/api/auth/login?email=${email}&password=${password}`, 
      { method: "POST" }
    );

    if(response.status >= 400 && response.status < 500)
      throw new Error((await response.json()).error);    

    const responseData: any = await response.json();
    
    
    localStorage.setItem("token", JSON.stringify(responseData["token"], null, 2));
    
    const parsedToken: Token = responseData["token"];
    const r: AuthenticationResponse = {      
      user: {
        id: responseData["user"]["id"],
        email: responseData["user"]["email"],
        password: responseData["user"]["password"]
      },
      token: parsedToken
    };

    return r;
  };

  public getToken = () => {
    const tokenString: string | null = localStorage.getItem("token");
    
    const token: Token | null = (tokenString != null) ? JSON.parse(tokenString) : null;

    return token;
  };

  public isLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  };
}