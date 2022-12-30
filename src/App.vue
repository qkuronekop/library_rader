<script setup lang="ts">
import CommonHeader from './components/CommonHeader.vue';
import BottomNavigationBar from './components/BottomNavigationBar.vue';
</script>
<template>
  <Suspense>
    <template #default>
      <div>
        <CommonHeader/>
        <router-view />
        <BottomNavigationBar/>
      </div>
    </template>
    <template #fallback>
      <div>
        <p class="text-green">Loading中です。。。</p>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
