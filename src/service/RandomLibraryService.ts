import axios from "axios";
import { Prefectures } from '../models/Prefectures';
import { Library } from "../models/Library";

class RandomLibraryService {
  private URL = "https://api.calil.jp/library?appkey=a7606ce7ca5e7be0119f04b9092a72d9&pref={pref}&format=json&callback=";

  public async getRandomLibrary():Promise<Library> {
    const randomIndex = Math.floor(Math.random() * 47);
    const res = await axios.get<Array<Library>>(this.URL.replace("{pref}", Prefectures[randomIndex]));
    const random = Math.floor(Math.random() * res.data.length + 1);
    return res.data[random];
  }
  
}

export default new RandomLibraryService()