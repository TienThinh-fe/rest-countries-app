export function Preview() {
  return (
    <div className="preview">
      <div className="preview__image">
        {/* <img src="https://restcountries.eu/data/afg.svg" alt="Afghanistan" /> */}
      </div>
      <div className="preview__info">
        <div className="preview__info--title">
          <span>Afghanistan</span>
        </div>
        <div className="preview__info--population">
          <span className="name">Population: </span>
          <span>27,657,145</span>
        </div>
        <div className="preview__info--region">
          <span className="name">Region: </span>
          <span>Asia</span>
        </div>
        <div className="preview__info--capital">
          <span className="name">Capital: </span>
          <span>Kabul</span>
        </div>
      </div>
    </div>
  );
}
