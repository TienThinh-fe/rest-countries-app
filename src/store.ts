import { create } from "zustand";
import { countryPreview, countryList } from "./interfaces";

const useStore = create((set) => ({
  filter: "",
  setFilter: (filter: string) => set({ filter }),
}));

export default useStore;
