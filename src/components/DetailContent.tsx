import { BorderCountry } from "./BorderCountry";

export function DetailContent() {
  return (
    <div className="detail__content">
      <div className="detail__content__image">
        {/* <img src="https://picsum.photos/200/300" alt="Detail" /> */}
      </div>
      <div className="detail__content__info">
        <div className="detail__content__info--title">Belgium</div>
        <div className="detail__content__info--more">
          <div className="detail__content__info--more__item">
            <span className="name">Native Name: </span>
            <span>ABC</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Top Level Domain: </span>
            <span>ABC</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Population: </span>
            <span>ABC</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Currencies: </span>
            <span>ABC</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Region: </span>
            <span>ABC</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Languages: </span>
            <span>ABC</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Sub Region: </span>
            <span>ABC</span>
          </div>
          <div className="detail__content__info--more__item">
            <span className="name">Capital: </span>
            <span>ABC</span>
          </div>
        </div>
        <div className="detail__content__info--border">
          <span className="name">Border Countries: </span>
          <div className="country">
            <BorderCountry name="France" />
            <BorderCountry name="France" />
            <BorderCountry name="France" />
          </div>
        </div>
      </div>
    </div>
  );
}
