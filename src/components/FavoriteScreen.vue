<script lang="ts">
import { defineComponent, ref } from "vue";
import { Library } from "../models/Library";

type GeoCode = {
  lon: string;
  lat: string;
};

function parseGeocode(geocode: string): GeoCode {
  const [lon, lat] = geocode.split(",");

  return {
    lon,
    lat,
  };
}

function geocodeToScheme(geocode: GeoCode): string {
  return (
    "http://maps.google.com/maps?f=q&hl=ja&geocode=&q=" +
    geocode.lat +
    "," +
    geocode.lon +
    "&z=19&ie=UTF8&dirflg=w"
  );
}

function geocodeToUrl(geocode: GeoCode): string {
  return "comgooglemaps://?q=" + geocode.lat + "," + geocode.lon + "&zoom=17";
}

function setIsMobaile(): boolean {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const isMobaile =
    userAgent.indexOf("iphone") != -1 ||
    userAgent.indexOf("ipad") != -1 ||
    userAgent.indexOf("android") != -1 ||
    userAgent.indexOf("mobile") != -1;
  return isMobaile;
}

export default defineComponent({
  name: "FavoriteScreen",
  setup(props) {
    let data = localStorage.getItem("favorite_libralies") ?? "[]";
    const favorites = ref(JSON.parse(data) as Array<Library>);
    const isMobaile = ref(setIsMobaile());
    return {
      favorites,
      isMobaile,
      parseGeocode,
      geocodeToUrl,
      geocodeToScheme,
    };
  },
  methods: {
    onClickDelete(favorite: Library) {
      let result = this.favorites.filter((e) => e !== favorite);
      this.favorites = result;
      localStorage.setItem(
        "favorite_libralies",
        JSON.stringify(this.favorites)
      );
    },
  },
});
</script>
<template>
  <div class="mt-4">
    <div v-for="favorite in favorites" :key="favorite.libid">
      <div class="p-3">
        <div @click="onClickDelete(favorite)">
          <img class="float-right w-4 h-4" src="../assets/icon/delete.png" />
        </div>
        <p class="w-fit font-bold text-xs mb-2 bg-slate-200">
          {{ favorite.city }}
        </p>
        <p class="w-fit font-medium">{{ favorite.short }}</p>
        <p class="w-fit text-left text-sm">{{ favorite.address }}</p>
        <p class="text-right">{{ favorite.distance.toFixed(2) }}km</p>
        <a
          v-if="isMobaile"
          v-bind:href="geocodeToScheme(parseGeocode(favorite.geocode))"
          target="_blank"
          >ここへいく</a
        >
        <a
          v-else
          v-bind:href="geocodeToUrl(parseGeocode(favorite.geocode))"
          target="_blank"
          >ここへいく</a
        >
      </div>
      <hr class="mr-6" />
    </div>
  </div>
</template>
