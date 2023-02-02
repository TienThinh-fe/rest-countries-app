import { useNavigate } from "react-router-dom";
import { countryPreview } from "../interfaces";
import { formatNumber } from "../helper";
import useStore from "../store";

export function Preview({ country }: { country: countryPreview }) {
  const { name, population, region, capital, flags } = country;
  const navigate = useNavigate();
  const theme = useStore((state: any) => state.theme);

  function handleClick() {
    navigate(`/detail/${name}`);
  }

  return (
    <div className={`preview preview__${theme}`} onClick={handleClick}>
      <div className="preview__image">
        <img src={flags} alt={name} />
      </div>
      <div className="preview__info">
        <div className="preview__info--title">
          <span>{name}</span>
        </div>
        <div className="preview__info--population">
          <span className="name">Population: </span>
          <span>{formatNumber(population)}</span>
        </div>
        <div className="preview__info--region">
          <span className="name">Region: </span>
          <span>{region}</span>
        </div>
        <div className="preview__info--capital">
          <span className="name">Capital: </span>
          <span>{capital}</span>
        </div>
      </div>
    </div>
  );
}
