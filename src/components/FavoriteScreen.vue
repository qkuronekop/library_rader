<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Library } from '../models/Library';
import "../extentions/geocode.extention";

export default defineComponent({
  name: 'FavoriteScreen',
  setup(props) {
    let data = localStorage.getItem("favorite_libralies") ?? "[]";
    const favorites = ref(JSON.parse(data) as Array<Library>);
    let userAgent = window.navigator.userAgent.toLowerCase();
    const isMobaile = ref(userAgent.indexOf("iphone") != -1 || userAgent.indexOf("ipad") != -1 || userAgent.indexOf("android") != -1 || userAgent.indexOf("mobile") != -1);
    return {
      favorites,
      isMobaile,
    }
  },
  methods: {
    onClickDelete(favorite: Library) {
      let result = this.favorites.filter((e) => e !== favorite);
      this.favorites = result;
      localStorage.setItem("favorite_libralies", JSON.stringify(this.favorites));
    }
  }
});
</script>
<template>
  <div class="mt-4">
    <div v-for="favorite in favorites" :key="favorite">
      <div class="p-3">
        <div @click="onClickDelete(favorite)">
              <img class="float-right w-4 h-4" src="../assets/icon/delete.png"/>
        </div>
        <p class="w-fit font-bold text-xs mb-2 bg-slate-200">{{ favorite.city }}</p>
        <p class="w-fit font-medium">{{ favorite.short }}</p>
        <p class="w-fit text-left text-sm">{{ favorite.address }}</p>
        <p class="text-right">{{  favorite.distance.toFixed(2) }}km</p>
        <a v-if="isMobaile" v-bind:href="favorite.geocode.toScheme()" target="_blank">ここへいく</a>
        <a v-else v-bind:href="favorite.geocode.toUrl()" target="_blank">ここへいく</a>
      </div>
      <hr class="mr-6"/>
    </div>
    </div>
</template>
