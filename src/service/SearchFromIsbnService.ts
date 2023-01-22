import axios from "axios";
import { Library } from "../models/Library";

class SearchService {
  private URL = "/api/check?appkey=a7606ce7ca5e7be0119f04b9092a72d9&isbn={isbn}&format=json&callback=";

  public async getLiblaries(geocode: string):Promise<Array<Library>> {
    const res = await axios.get<Array<Library>>(this.URL.replace("{geocode}", geocode));
    return res.data;
  }

}

export default new SearchService()