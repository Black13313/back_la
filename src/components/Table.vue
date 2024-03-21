<script setup lang="ts">

import {cartStore} from "../stores/cart.ts";
import {message} from "ant-design-vue";

const props = defineProps({
  open: Boolean,
})
const emit = defineEmits(['close'])
const cart = cartStore()

const tableList = [
  {id: 1, seat: '01', status: 'available', order_no: null},
  {id: 2, seat: '02', status: 'available', order_no: null},
  {id: 3, seat: '03', status: 'available', order_no: null},
  {id: 4, seat: '04', status: 'available', order_no: null},
  {id: 5, seat: '05', status: 'available', order_no: null},
  {id: 6, seat: '06', status: 'available', order_no: null},
]

const onSelectTable = (table: any) => {
  cart.setTable(table)
  message.success(`Selected Table: ${table.seat}`)
  emit('close')
}

const onCancel = () => {
  emit('close')
}
</script>

<template>
  <a-modal :open="open" @cancel="onCancel">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(t, index) in tableList" :key="index"
           class="bg-gray-200 rounded-xl py-4 px-6 cursor-pointer hover:bg-gray-400"
           :class="cart.table && cart.table.id === t.id ? 'bg-sky-400' : ''"
           @click="onSelectTable(t)">
        <p>Table: {{ t.seat }}</p>
        <span>{{ t.status }}</span>
      </div>
    </div>
  </a-modal>
</template>

<style scoped>

</style>