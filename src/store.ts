import { create } from "zustand";
import { countryPreview, countryList } from "./interfaces";

const useStore = create((set) => ({
  filter: "",
  setFilter: (filter: string) => set({ filter }),

  name: "",
  setName: (name: string) => set({ name }),

  isLoadingDetail: true,
  setIsLoadingDetail: (isLoadingDetail: boolean) => set({ isLoadingDetail }),
}));

export default useStore;
