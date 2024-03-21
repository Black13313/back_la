import {defineStore} from 'pinia'
import {message} from "ant-design-vue";

export const cartStore = defineStore('cart', {
  state: () => ({
    items: [],
    table: undefined
  }),
  actions: {
    addItem(product: any) {
      if (!this.table) {
        return message.warn('Please select a table')
      }

      const item = {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        qty: 1,
      }

      if (this.isProductAdded(product.id)) {
        this.items.map((i: any) => {
          if (i.id === product.id) i.qty++
        })
      } else {
        this.items.push(item)
      }
    },
    deleteItem(productId: number) {
      const index = this.items.findIndex((item: any) => item.id === productId)
      if (index !== -1) this.items.splice(index, 1)
    },
    isProductAdded(productId: number) {
      return this.items.filter((i: any) => i.id === productId).length > 0
    },
    subTotal() {
      return this.items.reduce((sum: number, item: any) => sum + (item.price * item.qty), 0)
    },
    discount() {
      return (this.subTotal() * (10 / 100)).toFixed(2)
    },
    total() {
      return this.subTotal() - Number(this.discount())
    },
    setTable(table: any) {
      this.table = table
    }
  },
  persist: {
    storage: localStorage
  }
})