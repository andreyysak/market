import { create } from 'zustand';

type ViewState = {
  isTableView: boolean;
  toggleView: () => void;
  setView: (value: boolean) => void;
};

export const useViewStore = create<ViewState>((set) => ({
  isTableView: false,
  toggleView: () => set((state) => ({ isTableView: !state.isTableView })),
  setView: (value) => set({ isTableView: value }),
}));
