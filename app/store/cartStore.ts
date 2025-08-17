"use client"
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image?: string;
};

type CartState = {
  items: CartItem[];
  total: number;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string, size: string) => void;
  clearCart: () => void;
  updateQty: (id: string, size: string, qty: number) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addItem: (newItem) => {
        const { items } = get();

        const existingItemIndex = items.findIndex(
          (item) => item.id === newItem.id && item.size === newItem.size
        );

        let updatedItems;
        if (existingItemIndex > -1) {
         
          updatedItems = items.map((item, idx) =>
            idx === existingItemIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
        
          updatedItems = [...items, { ...newItem, quantity: 1 }];
        }

        set({
          items: updatedItems,
          total: updatedItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),
        });
      },
  updateQty: (id, size, qty) => {
        const updatedItems = get().items.map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: Math.max(1, qty) }
            : item
        );

        set({
          items: updatedItems,
          total: updatedItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),
        });
      },
      removeItem: (id, size) => {
        const updatedItems = get().items.filter(
          (item) => !(item.id === id && item.size === size)
        );
        
        set({
          items: updatedItems,
          total: updatedItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),
        });
      },

      clearCart: () => set({ items: [], total: 0 }),
    }),
    { name: "cart-storage" } 
  )
);
