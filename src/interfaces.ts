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

export interface useQueryReturn {
  data: countryPreview[];
  isLoading: boolean;
  isError: boolean;
}

export interface countryDetail {
  name: string;
  officialName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  borders: string[];
  flags: string;
}
