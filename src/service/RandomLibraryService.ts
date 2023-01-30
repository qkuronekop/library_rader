import axios from "axios";
import { Prefectures } from '../models/Prefectures';
import { Library } from "../models/Library";

const appKey = import.meta.env.APP_KEY;

class RandomLibraryService {
  private URL = "https://api.calil.jp/library?appkey={appKey}&pref={pref}&format=json&callback=";

  public async getRandomLibrary():Promise<Library> {
    const randomIndex = Math.floor(Math.random() * 47);
    const res = await axios.get<Array<Library>>(this.URL.replace("{pref}", Prefectures[randomIndex]).replace('{appKey}', appKey));
    const random = Math.floor(Math.random() * res.data.length + 1);
    return res.data[random];
  }
  
}

export default new RandomLibraryService()