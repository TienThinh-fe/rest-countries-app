export interface countryPreview {
  code: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: string;
}

export interface countryList {
  countries: countryPreview[];
}
