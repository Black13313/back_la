<script setup lang="ts">
import {userStore} from "./stores/user.ts";

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
