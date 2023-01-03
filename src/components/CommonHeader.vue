<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonHeader',
  setup(props) {
    
  },
});
</script>
<template>
  <div class="w-full h-16 fixed inset-0 justify-center py-4 shadow-md shadow-gray-200 z-10 bg-white">
    <header>
      <h1 class="text-2xl font-bold text-h1">図書館レーダー</h1>
    </header>
  </div>
</template>