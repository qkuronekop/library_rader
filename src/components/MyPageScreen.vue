<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MyPageScreen",
  setup(props) {
    const modalOpen = ref(false);
    return {
      modalOpen,
    };
  },
  methods: {
    onClickAddHome() {},
    onClickNo() {
      this.modalOpen = false;
    },
    onClickYes() {
      localStorage.removeItem("favorite_libralies");
      this.modalOpen = false;
    },
  },
});
</script>
<template>
  <div id="my_page" class="mt-8">
    <div>
      <div class="m-6 flex" @click="modalOpen = true">
        <img class="w-6 h-6 mr-4" src="../assets/icon/delete.png" />
        <p class="text-left">お気に入りを全て削除</p>
      </div>
      <hr class="mr-6" />
    </div>
    <div>
      <div class="m-6 flex" @click="onClickAddHome">
        <img class="w-6 h-6 mr-4" src="../assets/icon/ic_home.png" />
        <p class="text-left">ホーム画面に追加</p>
      </div>
      <hr class="mr-6" />
    </div>
  </div>
  <teleport to="#my_page">
    <div
      class="bg-slate-100 rounded-md drop-shadow-md mx-4 p-4"
      v-if="modalOpen"
    >
      <img class="w-6 h-6 mb-2" src="../assets/icon/attention.png" />
      <p class="text-left">お気に入りを全て削除します。</p>
      <p class="text-left mb-4">本当によろしいですか？</p>
      <div class="mr-auto">
        <botton @click="onClickNo" class="mr-1 text-slate-500">いいえ</botton>
        <botton @click="onClickYes" class="ml-1 text-rose-500">はい</botton>
      </div>
    </div>
  </teleport>
</template>
