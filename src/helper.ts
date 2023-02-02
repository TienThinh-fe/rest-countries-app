import axios from "axios";

export function formatNumber(population: number) {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatArrayString(array: string[]) {
  return array.join(", ");
}

export function getStringFromObject(obj: any) {
  return Object.values(obj).join(", ");
}

export function getCurrenciesString(currencies: any) {
  // traverse object and join the "name" key
  return Object.values(currencies)
    .map((currency: any) => currency.name)
    .join(", ");
}

export async function getCountries(filter?: string, name?: string) {
  if (filter) {
    const res = await axios.get(
      `https://restcountries.com/v3.1/region/${filter}`
    );
    return res.data;
  } else if (name) {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return res.data;
  } else {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    return res.data;
  }
}

export async function getDetailCountry(name?: string) {
  const res = await axios.get(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  return res.data;
}

export async function getNameFromCode(code: string): Promise<string> {
  const res = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
  return res.data[0].name.common;
}
