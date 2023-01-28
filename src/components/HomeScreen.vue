<script lang="ts">
import { defineComponent, ref } from "vue";
import randomLibraryService from "../service/RandomLibraryService";
import searchFromIsbnService from "../service/SearchFromISBNSerive";
import { Prefectures } from "../models/Prefectures";
// import { PrefecturesSystemId } from "../models/Prefectures";
import { calilUrl } from "../models/Library";

export default defineComponent({
  name: "HomeScreen",
  async setup(props) {
    const randomLibrary = await randomLibraryService.getRandomLibrary();
    let input = ref("");
    console.log(randomLibrary);
    console.log(Prefectures);
    const prefs = ref(Prefectures);
    const pref = ref("東京都");
    const searchedLiblaries = ref();
    return {
      randomLibrary,
      input,
      prefs,
      pref,
      searchedLiblaries,
      calilUrl,
    };
  },
  // methods: {
  //   async searchLiblary() {
  //     if (this.input === "") {
  //       alert("ISBNが入力されていないようです。");
  //       return;
  //     }
  //     const index = Prefectures.findIndex((e) => e == this.pref);

  //     this.searchedLiblaries = await searchFromIsbnService.getLiblaries(
  //       this.input,
  //       PrefecturesSystemId[index] + "_Pref"
  //     );
  //   },
  // },
});
</script>
<template>
  <div class="mt-8">
    <h2 class="text-xl font-bold text-h2">一期一会</h2>
    <div class="m-4 p-4 bg-slate-100 rounded-md drop-shadow-md">
      <p class="float-right">
        <a :href="randomLibrary.url_pc" target="_blank"
          ><img class="w-6 h-6" src="../assets/icon/webpage.png"
        /></a>
      </p>
      <p>{{ randomLibrary.pref }}({{ randomLibrary.city }})</p>
      <p class="text-left font-bold">
        <a
          :href="calilUrl(randomLibrary.libid, randomLibrary.formal)"
          target="_blnk"
          >{{ randomLibrary.short }}</a
        >
      </p>
      <p class="text-left">〒{{ randomLibrary.post }}</p>
      <p class="text-left">{{ randomLibrary.address }}</p>
      <p class="text-right">Tel: {{ randomLibrary.tel }}</p>
    </div>
    <!-- <div class="mt-6">
      <h2 class="text-xl font-bold text-h2">この本、どこにあるの？</h2>
      <div class="mx-4 grid grid-cols-1 mt-4">
        <select
          class="w-full rounded border-solid border-2 border-gray p-1"
          v-model="pref"
        >
          <option v-for="pref in prefs" :key="pref">{{ pref }}</option>
        </select>
      </div>
      <div class="m-4 grid grid-cols-6 border rounded px-4 py-2">
        <div class="w-fit">
          <img class="w-10 h-10" src="../assets/icon/search.png" />
        </div>
        <div class="col-span-5">
          <input
            class="w-full h-12 placeholder:text-xl placeholder:pl-2"
            type="text"
            v-model="input"
            placeholder="ISBN"
          />
        </div>
      </div>
      <div class="mx-4 grid grid-cols-1">
        <button @click="searchLiblary" class="w-full">さがす</button>
      </div>
      <div v-for="lib in searchedLiblaries" :key="lib.libid">
        <p></p>
      </div>
    </div> -->
  </div>
</template>
