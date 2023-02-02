import { Preview } from "./Preview";
import { countryPreview } from "../interfaces";
import useStore from "../store";

export function PreviewList({
  isLoading,
  error,
  data,
}: {
  isLoading: boolean;
  error: boolean;
  data: countryPreview[];
}) {
  const theme = useStore((state: any) => state.theme);

  if (isLoading) {
    return (
      <div className={`preview-list preview-list__${theme}`}>Loading...</div>
    );
  }
  if (error) {
    return <div className={`preview-list preview-list__${theme}`}>Error!</div>;
  }

  return (
    <div className={`preview-list preview-list__${theme}`}>
      {data?.map((country: countryPreview) => (
        <Preview key={country.code} country={country} />
      ))}
    </div>
  );
}
