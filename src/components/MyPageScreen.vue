<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyPageScreen",
  setup(props) {},
  methods: {
    onClickAddHome() {},
  },
});
</script>
<template>
  <div class="mt-8">
    <div>
      <div class="m-6 flex" @click="onClickAddHome">
        <img class="w-6 h-6 mr-4" src="../assets/icon/ic_home.png" />
        <p class="text-left">ホーム画面に追加</p>
      </div>
      <hr class="mr-6" />
    </div>
  </div>
</template>
