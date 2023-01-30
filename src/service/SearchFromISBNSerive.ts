import axios from "axios";
import { CheckLiblary } from "../models/CheckLiblary";

const appKey = import.meta.env.APP_KEY;

class SearchFromISBNService{
  private URL = "https://api.calil.jp/check?appkey={appKey}&isbn={isbn}&systemid={systemId}&format=json&callback=";
  public async getLiblaries(isbn: string, systemId: string) :Promise<CheckLiblary>{
    console.log(this.URL.replace("{isbn}", isbn).replace("{systemId}", systemId));
    const res = await axios.get<any>(this.URL.replace("{isbn}", isbn).replace("systemId", systemId).replace('{appKey}', appKey));
    console.log(res.data);
    return res.data;  
  }
}

export default new SearchFromISBNService()