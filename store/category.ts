import { create } from 'zustand';

type CategoryState = {
  selected: string | null;
  setSelected: (category: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selected: null,
  setSelected: (category) => set({ selected: category })
}))