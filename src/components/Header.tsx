import moonLightMode from "../assets/moon-light-mode.webp";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <span>Where in the world?</span>
        </div>
        <div className="header__theme">
          <img src={moonLightMode} alt="moon light mode" />
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  );
}
