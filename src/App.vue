<script setup lang="ts">
import CommonHeader from './components/CommonHeader.vue';
import BottomNavigationBar from './components/BottomNavigationBar.vue';
</script>
<template>
  <Suspense>
    <template #default>
      <div>
        <CommonHeader/>
        <div class="fixed inset-x-0 inset-y-14 z-0">
          <router-view />
        </div>
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