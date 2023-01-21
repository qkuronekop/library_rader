<script lang="ts">
import { defineComponent, ref } from "vue";
import randomLibraryService from "../service/RandomLibraryService";

export default defineComponent({
  name: "HomeScreen",
  async setup(props) {
    const randomLibrary = await randomLibraryService.getRandomLibrary();
    let input = ref("");
    console.log(randomLibrary);
    return {
      randomLibrary,
      input,
    };
  },
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
        {{ randomLibrary.short }}
      </p>
      <p class="text-left">〒{{ randomLibrary.post }}</p>
      <p class="text-left">{{ randomLibrary.address }}</p>
      <p class="text-right">Tel: {{ randomLibrary.tel }}</p>
    </div>
    <div class="mt-6">
      <h2 class="text-xl font-bold text-h2">この本、どこにあるの？</h2>
      <div class="w-full">
        <input type="text" v-model="input" placeholder="ISBN" />
      </div>
    </div>
  </div>
</template>
