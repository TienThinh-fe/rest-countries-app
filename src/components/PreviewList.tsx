import { Preview } from "./Preview";

import { dumbData, CountryType, CountryListType } from "../data";

export function PreviewList() {
  return (
    <div className="preview-list">
      {dumbData.countries.map((country: CountryType, index: number) => (
        <Preview key={index} country={country} />
      ))}
    </div>
  );
}
