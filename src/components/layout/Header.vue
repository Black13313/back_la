<script setup lang="ts">

import {layoutStore} from "../../stores/layout.ts";
import {userStore} from "../../stores/user.ts";

const layout = layoutStore()
const user = userStore();

const changeTheme = (checked: boolean) => {
  layout.changeTheme(checked)
};
</script>

<template>
  <div class="bg-white shadow h-12 fixed ml-3 w-full">
    <div class="flex items-center">
      <div>
        <a-switch
          :checked="layout.theme === 'dark'"
          checked-children="Dark"
          un-checked-children="Light"
          @change="changeTheme"
        />
      </div>
      <a-divider type="vertical"/>
      <div>
        {{ user.user.fullName }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>