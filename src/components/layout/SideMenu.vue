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
    label: 'ພາບລວມ',
    title: 'Home Page',
    route: '/'
  },
  {
    key: '8',
    icon: () => h(HomeOutlined),
    label: 'ງານສຳເລັດ',
    title: 'Home Page',
    route: '/'
  },

  {
    key: 'sub2',
    icon: () => h(UserOutlined),
    label: 'ຈັດການສັນຍາ',
    title: 'Contract',
    children: [
      {
        key: '3',
        label: 'ສ້າງສັນຍາ',
        title: 'ສັນຍາ',
        route: '/add_contract'
      },
      {
        key: '4',
        label: 'ສັນຍາ',
        title: 'ສັນຍາ',
        route: '/contract'
      },

    ],
  },

  {
    key: 'sub6',
    icon: () => h(UserOutlined),
    label: 'ຈັດການຜູ້ໃຊ້',
    title: 'Users',
    children: [
      {
        key: '7',
        label: 'ຜູ້ໃຊ້ທັງຫມົດ',
        title: 'User List',
        route: '/user'
      },
      {
        key: '8',
        label: 'ສິນນຳໃຊ້',
        title: 'Role',
        route: '/user/role'
      },
      {
        key: '5',
        label: 'ຈັດການເອກະສານຟີຣແລຣນ',
        title: 'document',
        route: '/document/lance'
      },
      {
        key: '6',
        label: 'ຟີແລຣນທັງໜົດ',
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

