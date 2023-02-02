import { useEffect, useState } from "react";
import { getNameFromCode } from "../helper";

export function BorderCountry({
  arrayCode,
  handleClick,
}: {
  arrayCode: string[];
  handleClick: Function;
}) {
  const [nameArray, setNameArray] = useState<string[]>([]);

  useEffect(() => {
    // empty the array before fetching new data
    setNameArray([]);

    arrayCode.forEach((code) => {
      getNameFromCode(code)
        .then((res) => {
          setNameArray((prev) => [...prev, res]);
        })
        .catch((err) => console.log(err));
    });
  }, [arrayCode]);

  return (
    <div className="border-country">
      {nameArray.map((name: string) => (
        <div
          key={name}
          className="border-country__item"
          onClick={() => {
            handleClick(name);
          }}
        >
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
