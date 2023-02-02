import useStore from "../store";
import { useState } from "react";

export function Search() {
  const theme = useStore((state: any) => state.theme);
  const setName = useStore((state: any) => state.setName);
  const setFilter = useStore((state: any) => state.setFilter);

  const [tempName, setTempName] = useState("");

  function handleChange(e: any) {
    setTempName(e.target.value);
  }

  function handleSearch(e: any) {
    if (e.key === "Enter") {
      setName(tempName);
      setFilter("");
    }
  }

  return (
    <div className={`search search__${theme}`}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={tempName}
        onChange={handleChange}
        onKeyDown={handleSearch}
      />
    </div>
  );
}
