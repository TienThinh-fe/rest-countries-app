import { Preview } from "./Preview";
import { countryPreview } from "../interfaces";

export function PreviewList({
  isLoading,
  error,
  data,
}: {
  isLoading: boolean;
  error: boolean;
  data: countryPreview[];
}) {
  if (isLoading) {
    return <div className="preview-list">Loading...</div>;
  }
  if (error) {
    return <div className="preview-list">Error!</div>;
  }

  return (
    <div className="preview-list">
      {data?.map((country: countryPreview) => (
        <Preview key={country.code} country={country} />
      ))}
    </div>
  );
}
