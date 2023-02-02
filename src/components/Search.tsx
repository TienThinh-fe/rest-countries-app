import useStore from "../store";
import { useState } from "react";

export function Search() {
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
    <div className="search">
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
