import { CountryType } from "../data";
import { formatNumber } from "../helper";

export function Preview({ country }: { country: CountryType }) {
  const { name, population, region, capital } = country;

  return (
    <div className="preview">
      <div className="preview__image">
        {/* <img src="https://restcountries.eu/data/afg.svg" alt="Afghanistan" /> */}
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
