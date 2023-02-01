import { useQuery } from "@tanstack/react-query";
import { Preview } from "./Preview";
import { getAllCountries } from "../helper";
import { countryPreview } from "../interfaces";

export function PreviewList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const dataFormApi = await getAllCountries();
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

  return (
    <div className="preview-list">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((country: countryPreview) => (
          <Preview key={country.code} country={country} />
        ))
      )}
    </div>
  );
}
