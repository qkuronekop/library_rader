export {};

declare global {
  interface String {
    toUrl(): string;
    toScheme() : string;
  }
}
String.prototype.toUrl = function() {
  let geocode = this.split(",");
  return "http://maps.google.com/maps?f=q&hl=ja&geocode=&q=" + geocode[1] + "," + geocode[0] + "&z=19&ie=UTF8&dirflg=w";
}
String.prototype.toScheme = function() {
  let geocode = this.split(",");
  return "comgooglemaps://?q=" + geocode[1] + "," + geocode[0] +"&zoom=17";
}