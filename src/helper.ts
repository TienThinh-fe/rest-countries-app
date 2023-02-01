// format number with comma separator
export function formatNumber(population: number) {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
