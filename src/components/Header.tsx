import useStore from "../store";

import moonLightMode from "../assets/moon-light-mode.webp";
import moonDarkMode from "../assets/moon-dark-mode.webp";

export function Header() {
  const [theme, setTheme] = useStore((state: any) => [
    state.theme,
    state.setTheme,
  ]);

  function handleChangeTheme() {
    if (theme === "") {
      setTheme("dark");
    } else {
      setTheme("");
    }
  }

  return (
    <header className={`header header__${theme}`}>
      <div className="header__container">
        <div className="header__logo">
          <span>Where in the world?</span>
        </div>
        <div className="header__theme" onClick={handleChangeTheme}>
          {theme === "" ? (
            <img src={moonLightMode} alt="moon light mode" />
          ) : (
            <img src={moonDarkMode} alt="moon dark mode" />
          )}
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  );
}
