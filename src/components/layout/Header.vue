<script setup lang="ts">

import {userStore} from "../../stores/user.ts";

const user = userStore();

</script>

<template>
  <div class="bg-white shadow h-12 fixed ml-3 w-full">
    <div class="flex items-center">
     
      <a-divider type="vertical"/>
      <div>
        {{ user.user.fullName }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>