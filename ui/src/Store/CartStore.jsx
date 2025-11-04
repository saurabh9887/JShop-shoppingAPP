import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (item) => {
        // const existingItem = get().cartItems.find((i) => i.id === item.id);

        // if (existingItem) {
        //   set({
        //     cartItems: get().cartItems.map((i) =>
        //       i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        //     ),
        //   });
        // } else {
        //   set({
        //     cartItems: [...get().cartItems, { ...item, quantity: 1 }],
        //   });
        // }

        set({
          cartItems: [...get().cartItems, { ...item, quantity: item.quantity }],
        });
      },

      removeFromCart: (id) => {
        set({ cartItems: get().cartItems.filter((i) => i.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity < 1) return;
        set({
          cartItems: get().cartItems.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => set({ cartItems: [] }),

      getTotal: () =>
        get().cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
    }),
    {
      name: "cart-storage", // key in localStorage
      getStorage: () => localStorage, // use sessionStorage if you prefer temporary storage
    }
  )
);
