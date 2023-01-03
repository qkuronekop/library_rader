<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'
import IconBase from './icons/IconBase.vue';
import HomeIcon from './icons/HomeIcon.vue';
import MapPinIcon from './icons/MapPinIcon.vue';
import FavoriteIcon from './icons/FavoriteIcon.vue';
import MyPageIcon from './icons/MyPageIcon.vue';

export default defineComponent({
  name: 'BottomTabView',
  components: {
    IconBase,
    HomeIcon,
    MapPinIcon,
    FavoriteIcon,
    MyPageIcon,
  },
  setup(props) {

    const router = useRouter();

    const colors = ref(["#50C1E9", "#50C1E9", "#50C1E9", "#50C1E9"]);
    const select = (index: number) => {
      colors.value = ["#50C1E9", "#50C1E9", "#50C1E9", "#50C1E9"];
      colors.value[index] = "#5BE7C4";
      switch(index) {
        case 0:
          router.push('/');
        break;
        case 1:
        router.push('/map');
        break;
        case 2:
        router.push('/favorite');
        break;
        case 3:
        router.push('/my_page');
        break;
      }
    }
    return {
      colors,
      select,
    }
  },
});
</script>
<template>
  <div class="w-full fixed bottom-0 inset-x-0 z-10">
    <div class="w-full justify-evenly flex bg-light-gray pt-3 pb-6">
      <div><button @click="select(0)" class="rounded-full border-hidden hover:border-hidden active:border-hidden forcus:border-hidden"><icon-base icon-name="home" width="32" height="32" v-bind:iconColor="colors[0]"><home-icon /></icon-base></button></div>
      <div><button @click="select(1)" class="rounded-full border-hidden hover:border-hidden active:border-hidden forcus:border-hidden"><icon-base icon-name="map-pin" width="32" height="32" v-bind:iconColor="colors[1]"><map-pin-icon /></icon-base></button></div>
      <div><button @click="select(2)" class="rounded-full border-hidden hover:border-hidden active:border-hidden forcus:border-hidden"><icon-base icon-name="favorite" width="32" height="32" v-bind:iconColor="colors[2]"><favorite-icon /></icon-base></button></div>
      <div><button @click="select(3)" class="rounded-full border-hidden hover:border-hidden active:border-hidden forcus:border-hidden"><icon-base icon-name="my-page" width="32" height="32" v-bind:iconColor="colors[3]"><my-page-icon /></icon-base></button></div>
    </div>
  </div>
</template>