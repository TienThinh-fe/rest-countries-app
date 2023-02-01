import { create } from "zustand";
import { countryPreview, countryList } from "./interfaces";

const useStore = create((set) => ({
  countries: [] as countryPreview[],
  setCountries: (countries: countryList) =>
    set((state: any) => ({ countries: countries.countries })),
}));

export default useStore;
