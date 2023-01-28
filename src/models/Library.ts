export interface Library {
  libid: string,
  formal: string,
  short: string,
  systemid: string,
  systemname: string,
  libkey: string,
  category: string,
  post: string,
  tel: string,
  pref: string,
  city: string,
  distance: number,
  address: string,
  geocode: string,
  isil: string,
  faid: string,
  url_pc: string,
}

export function calilUrl(libid: string, formal: string) {
  return "https://calil.jp/library/" + libid + "/" + formal;
}
