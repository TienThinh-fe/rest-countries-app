import { useQuery } from "@tanstack/react-query";
import { getCountries } from "./helper";
import { countryPreview, useQueryReturn } from "./interfaces";

export function useGetCountries(filter?: string): useQueryReturn {
  const { data, error, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const dataFormApi = await getCountries(filter);
      let dataNormalized: countryPreview[] = [];

      dataFormApi.forEach((country: any) => {
        dataNormalized.push({
          code: country.cca2,
          name: country.name.common,
          population: country.population,
          region: country.region,
          capital: country.capital || "",
          flags: country.flags.svg,
        });
      });

      return dataNormalized;
    },
  });

  return {
    data: data || [],
    isLoading,
    isError: !!error,
  };
}
