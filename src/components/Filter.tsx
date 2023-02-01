import downArrow from "../assets/down-arrow.webp";

import { useState } from "react";
import useStore from "../store";
import { FilterOptions } from "./FilterOptions";

export function Filter() {
  const [filter, setFilter] = useStore((state: any) => [
    state.filter,
    state.setFilter,
  ]);
  const setName = useStore((state: any) => state.setName);

  const [isOpenFilter, setIsOpenFilter] = useState(false);

  function handleClick(region: string) {
    setFilter(region);
    setName("");
  }

  function handleOpenFilter() {
    setIsOpenFilter(!isOpenFilter);
  }

  return (
    <div className="filter" onClick={handleOpenFilter}>
      <span>{filter ? filter : "Filter by Region"}</span>
      <img src={downArrow} alt="down arrow" />
      {isOpenFilter && <FilterOptions handleClick={handleClick} />}
    </div>
  );
}
