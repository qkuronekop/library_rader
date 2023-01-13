<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FavoriteScreen',
  setup(props) {
    let data = localStorage.getItem("favorite_libralies") ?? "[]";
    const favorites = ref(JSON.parse(data));
    return {
      favorites,
    }
  },
  methods: {
    onClickDeleteAll() {
      localStorage.clear();
      this.favorites = [];
    }
  }
});
</script>
<template>
  <div class="mt-4">
    <div @click="onClickDeleteAll">消す</div>
    <div v-for="favorite in favorites" :key="favorite">
      <div class="p-3">
          <p class="w-fit font-bold text-xs mb-2 bg-slate-200">{{ favorite.city }}</p>
          <p class="w-fit font-medium">{{ favorite.short }}</p>
          <p class="w-fit text-left text-sm">{{ favorite.address }}</p>
          <p class="text-right">{{  favorite.distance.toFixed(2) }}km</p>
        </div>
        <hr class="mr-6"/>
      </div>
    </div>
</template>
