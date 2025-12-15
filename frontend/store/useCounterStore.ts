// store/useCounterStore.ts
import { create } from "zustand";

interface CounterStore {
  cart: number;
  favorites: number;
  incrementCart: () => void;
  incrementFav: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  cart: 0,
  favorites: 0,
  incrementCart: () => set((state) => ({ cart: state.cart + 1 })),
  incrementFav: () => set((state) => ({ favorites: state.favorites + 1 })),
}));

export default useCounterStore;
