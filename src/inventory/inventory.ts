import Product from "../models/product";
import fetch from "cross-fetch";
import { GlobalData } from "../global_data/global_data";

export default class Inventory {
  public getNewestArrivalProducts = async () => {
    const response: Response = await fetch(`${GlobalData.apiDomain}/api/products/?min_time=2021-10-03`);
        
    const r: Product[] = await response.json();

    return r;
  };

  public getProduct = async (id: string) => {
    const response: Response = await fetch(`${GlobalData.apiDomain}/api/products/${id}`);
    
    const r: Product = await response.json();
    return r;
  };

  public getAllProducts = async (query?: { minPrice?: number, maxPrice?: number, categories?: string[] }) => {
    const url: URL = new URL(`${GlobalData.apiDomain}/api/products/`);

    if(query != undefined) {
      if(query.minPrice != undefined)
        url.searchParams.append("min_price", query.minPrice.toString());
        
      if(query.maxPrice != undefined)
        url.searchParams.append("max_price", query.maxPrice.toString());

      if(query.categories != undefined) {
        for(const category of query.categories)
          url.searchParams.append("categories", category);
      }
    }

    console.log(`CustomLog: Final Url = ${url.href}`);
    
    const response: Response = await fetch(url.href);

    const r: Product[] = await response.json();

    return r;
  };

  public randomFunction = () => {};
}