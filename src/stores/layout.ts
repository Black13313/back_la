import {defineStore} from 'pinia'

export const layoutStore = defineStore('layout', {
  state: () => ({
    layout: 'default',
    theme: 'dark'
  }),
  actions: {
    changeLayout(layout: string) {
      if (layout) this.layout = layout
    },
    changeTheme(checked: boolean) {
      this.theme = checked ? 'dark' : 'light'
      this.$nextTr
    }
  },
  persist: {
    storage: localStorage
  }
})