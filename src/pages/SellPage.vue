<script setup lang="ts">

import {onMounted, ref} from "vue";
import {cartStore} from "../stores/cart.ts";
import product from "../routes/product.ts";
import {writeFile, utils} from 'xlsx'
import Table from "../components/Table.vue";

const productList = ref([])
const cart = cartStore()
const isShowTable = ref<boolean>(false)

onMounted(async () => {
  await getProduct()
})

const getProduct = async () => {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  productList.value = data.products
}

const onAdd = (product: any) => {
  cart.addItem(product)
}

const onRemove = (productId: number) => {
  cart.deleteItem(productId)
}

const onShowTable = () => {
  isShowTable.value = true
}

const onExport = () => {
  const sheet1 = utils.json_to_sheet(productList.value)
  const sheet2 = utils.json_to_sheet(productList.value)

  const book = utils.book_new()
  utils.book_append_sheet(book, sheet1, 'My Sheet')
  utils.book_append_sheet(book, sheet2, 'Your Sheet')

  writeFile(book, 'test-export.xlsx', {
    bookType: 'xlsx', type: 'binary'
  })
}
</script>

<template>
  <div class="flex">
    <div class="flex-1 no-scrollbar"
         style="height: calc(100vh - 150px); overflow-y: auto;">
      <h1>Products</h1>
      <a-button @click="onExport">Export</a-button>
      <div v-if="productList.length > 0"
           class="grid grid-cols-3 gap-4">
        <div v-for="(p, index) in productList"
             :key="index">

          <a-card hoverable style="width: 240px">
            <template #cover>
              <img alt="example" :src="p.thumbnail"/>
            </template>
            <a-card-meta :title="p.title">
              <template #description>{{ p.description }}</template>
            </a-card-meta>
            <div class="flex items-center">
              <p class="pr-4">${{ p.price }}</p>
              <a-button class="mt-2" @click="onAdd(p)">Add</a-button>
            </div>
          </a-card>

        </div>
      </div>
    </div>

    <div class="w-52">
      <div>
        <a-button block @click="onShowTable">Table: {{ cart.table ? cart.table.seat : 'N/A' }}</a-button>
      </div>

      <h1>Cart</h1>
      <div v-if="cart.items.length > 0">
        <div v-for="(c, index) in cart.items" class="my-4">
          <div class="flex">
            <div class="w-14 mr-2">
              <img :src="c.thumbnail" alt="" class="w-14">
            </div>
            <div>
              <div class="flex items-center">
                <p class="flex-1">{{ c.title }}</p>
                <a-button @click="onRemove(c.id)">Del</a-button>
              </div>
              <a-input readonly v-model:value="c.qty"/>
              <p>${{ c.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <a-empty v-else/>
      <hr>
      <div>
        <div class="flex">
          <p class="flex-1">Sub total:</p>
          <p>${{ cart.subTotal() }}</p>
        </div>
        <div class="flex">
          <p class="flex-1">Discount:</p>
          <p>${{ cart.discount() }}</p>
        </div>
        <div class="flex">
          <p class="flex-1">Total:</p>
          <p>${{ cart.total() }}</p>
        </div>
      </div>
      <div>
        <a-button block>Checkout</a-button>
      </div>
    </div>

    <Table :open="isShowTable"
           @close="() => isShowTable = false"/>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>