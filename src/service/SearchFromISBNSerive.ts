import axios from "axios";
import { CheckLiblary } from "../models/CheckLiblary";

class SearchFromISBNService{
  private URL = "https://api.calil.jp/check?appkey=a7606ce7ca5e7be0119f04b9092a72d9&isbn={isbn}&systemid={systemId}&format=json&callback=";
  public async getLiblaries(isbn: string, systemId: string) :Promise<CheckLiblary>{
    console.log(this.URL.replace("{isbn}", isbn).replace("{systemId}", systemId));
    const res = await axios.get<any>(this.URL.replace("{isbn}", isbn).replace("systemId", systemId));
    console.log(res.data);
    return res.data;  
  }
}

export default new SearchFromISBNService()