<script lang="ts" setup>
import {h, ref, watch} from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons-vue';
import type {MenuTheme} from 'ant-design-vue';
import {layoutStore} from "../../stores/layout.ts";
import router from '../../routes'

const layout = layoutStore()
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
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Products',
    title: 'Products',
    children: [
      {
        key: '7',
        label: 'Product List',
        title: 'Product List',
        route: '/product'
      },
      {
        key: '8',
        label: 'Catalog',
        title: 'Catalog',
        route: '/product/catalog'
      },
      {
        key: '9',
        label: 'Unit',
        title: 'Unit',
        route: '/product/unit'
      },
    ],
  },
]);

watch(() => layout.theme, (val) => {
  theme.value = val
})

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

