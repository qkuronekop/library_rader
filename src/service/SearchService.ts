import axios from "axios";
import { Library } from "../models/Library";

const appKey = import.meta.env.APP_KEY;

class SearchService {
  private URL = "https://api.calil.jp/library?appkey={appKey}&geocode={geocode}&format=json&callback=";

  public async getLiblaries(geocode: string):Promise<Array<Library>> {
    const res = await axios.get<Array<Library>>(this.URL.replace("{geocode}", geocode).replace('{appKey}', appKey));
    return res.data;
  }

}

export default new SearchService()