<script setup lang="ts">
import {userStore} from "./stores/user.ts";
import SideMenu from "./components/layout/SideMenu.vue";
import Header from "./components/layout/Header.vue";
import Content from "./components/layout/Content.vue";
import Footer from "./components/layout/Footer.vue";
import {useRoute} from "vue-router";
import {onBeforeMount, onBeforeUpdate, onMounted, ref} from "vue";
import MainLayout from "./components/layout/MainLayout.vue";

const user = userStore()
const route = useRoute()
const requireAuth = ref<boolean>(false)

/*onBeforeUpdate(() => {
  requireAuth.value = route.matched.some((r: any) => r.meta.requireAuth)
})*/

/*onMounted(async () => {
  requireAuth.value = await new Promise(resolve => {
    route.matched.some((r: any) => resolve(r.meta.requireAuth))
  })
})*/
</script>

<template>
  <div class="min-h-screen flex bg-gray-200">
    <template v-if="Object.keys(user.user).length > 0">
      <MainLayout/>
    </template>
    <template v-else>
      <div class="w-screen">
        <router-view/>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
