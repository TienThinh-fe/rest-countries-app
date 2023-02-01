import downArrow from "../assets/down-arrow.webp";

import { useState } from "react";
import { FilterOptions } from "./FilterOptions";

export function Filter() {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  function handleOpenFilter() {
    setIsOpenFilter(!isOpenFilter);
  }

  return (
    <div className="filter" onClick={handleOpenFilter}>
      <span>Filter by Region</span>
      <img src={downArrow} alt="down arrow" />
      {isOpenFilter && <FilterOptions />}
    </div>
  );
}
