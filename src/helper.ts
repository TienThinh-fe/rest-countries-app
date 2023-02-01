import axios from "axios";

// format number with comma separator
export function formatNumber(population: number) {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export async function getCountries(filter?: string) {
  if (filter === "All" || !filter) {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    return res.data;
  } else {
    const res = await axios.get(
      `https://restcountries.com/v3.1/region/${filter}`
    );
    return res.data;
  }
}
