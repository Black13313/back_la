<script setup lang="ts">

import Header from "./Header.vue";
import SideMenu from "./SideMenu.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div>
    <SideMenu/>
  </div>
  <div class="flex-1 flex justify-end">
    <div class=""
         style="width: calc(100vw - 256px); height: calc(100vh - 48px)">
      <Header/>
      <Content class="py-14 px-6">
        <router-view/>
      </Content>
      <Footer/>
    </div>
  </div>

</template>

<style scoped>

</style>