import { create } from 'zustand';

type PerPageState = {
  perPage: number;
  setPerPage: (perPage: number) => void
}

export const usePerPageStore = create<PerPageState>((set) => ({
  perPage: 10,
  setPerPage: (perPage) => set({ perPage})
}))