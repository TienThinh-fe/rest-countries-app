import useStore from "../store";

export function FilterOptions({ handleClick }: { handleClick: Function }) {
  const theme = useStore((state: any) => state.theme);

  return (
    <div className={`filter-options filter-options__${theme}`}>
      <ul>
        <li onClick={() => handleClick("")}>All</li>
        <li onClick={() => handleClick("africa")}>Africa</li>
        <li onClick={() => handleClick("america")}>America</li>
        <li onClick={() => handleClick("asia")}>Asia</li>
        <li onClick={() => handleClick("europe")}>Europe</li>
        <li onClick={() => handleClick("oceania")}>Oceania</li>
      </ul>
    </div>
  );
}
