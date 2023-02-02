import { useNavigate } from "react-router-dom";
import { BorderCountry } from "./BorderCountry";
import { countryDetail } from "../interfaces";
import {
  formatNumber,
  formatArrayString,
  getStringFromObject,
  getCurrenciesString,
} from "../helper";

export function DetailContent(detail: { detail: countryDetail }) {
  const {
    name,
    officialName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flags,
  } = detail.detail;

  const navigate = useNavigate();

  const handleClickBorder = (name: string) => {
    navigate(`/detail/${name}`);
  };

  return (
    <div className="detail__content">
      <div className="detail__content__image">
        <img src={flags} alt="Flag" />
      </div>
      <div className="detail__content__info">
        <div className="detail__content__info--title">{name}</div>
        <div className="detail__content__info--more">
          <div className="detail__content__info--more__item">
            <span className="name">Official Name: </span>
            <span className="info">{officialName}</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Top Level Domain: </span>
            <span className="info">{formatArrayString(topLevelDomain)}</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Population: </span>
            <span className="info">{formatNumber(population)}</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Currencies: </span>
            <span className="info">{getCurrenciesString(currencies)}</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Region: </span>
            <span className="info">{region}</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Languages: </span>
            <span className="info">{getStringFromObject(languages)}</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Sub Region: </span>
            <span className="info">{subregion}</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Capital: </span>
            <span className="info">{capital}</span>
          </div>
        </div>
        <div className="detail__content__info--border">
          <span className="name">Border Countries: </span>
          <div className="country">
            <BorderCountry
              arrayCode={borders}
              handleClick={handleClickBorder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
