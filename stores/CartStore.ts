/**
 * @TODO: Revisit this to make sure it works
 */
import { defineStore } from "pinia"

export const useCartStore = defineStore("CartStore", {
  state: () => ({
    items: [] as any[],
  }),
  actions: {
    addItem(item: any) {
      const existingItem = this.items.find((i) => i.sys.id === item.sys.id)
      if (existingItem) {
        existingItem.amount++
      } else {
        this.items.push({ item, amount: 1 })
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
