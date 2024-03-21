<script lang="ts" setup>
import {h, ref} from 'vue';
import {
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons-vue';
import type {MenuTheme} from 'ant-design-vue';
import router from '../../routes'

const theme = ref<MenuTheme>('dark');
const selectedKeys = ref(['1']);
const openKeys = ref(['1']);
const items = ref([
  {
    key: '1',
    icon: () => h(HomeOutlined),
    label: 'Home Page',
    title: 'Home Page',
    route: '/'
  },
  {
    key: '2',
    icon: () => h(HomeOutlined),
    label: 'Sell',
    title: 'Sell',
    route: '/sell'
  },
  {
    key: 'sub1',
    icon: () => h(UserOutlined),
    label: 'Users',
    title: 'Users',
    children: [
      {
        key: '3',
        label: 'User List',
        title: 'User List',
        route: '/user'
      },
      {
        key: '4',
        label: 'Role',
        title: 'Role',
        route: '/user/role'
      },
    ],
  },

]);


const onMenuSelected = (data: any) => {
  router.push(data.item.route)
}
</script>

<template>
  <div class="fixed">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
      :theme="theme"
      :items="items"
      class="h-screen"
      @select="onMenuSelected"
    />
  </div>
</template>

