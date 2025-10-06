import { create } from 'zustand';

type PaginationState = {
  page: number;
  perPage: number;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
  resetPage: () => void;
};

export const usePaginationStore = create<PaginationState>((set) => ({
  page: 1,
  perPage: 10,
  setPage: (page) => set({ page }),
  setPerPage: (perPage) => set({ perPage, page: 1 }), // reset page on perPage change
  resetPage: () => set({ page: 1 }),
}));
