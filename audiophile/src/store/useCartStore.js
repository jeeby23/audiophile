import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  cart: [],
  isCartOpen: false,

addToCart: (item) =>
  set((state) => {
    const existing = state.cart.find((i) => i.id === item.id)
    if (existing) {
      return {
        cart: state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }
    }
    return { cart: [...state.cart, { ...item, quantity: 1 }] }
  }),

  clearCart: () => set({ cart: [] }),

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  closeCart: () => set({ isCartOpen: false }),

  totalItems: () => {
    const state = get()
    return (state.cart || []).reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    )
  },
}))

export default useCartStore