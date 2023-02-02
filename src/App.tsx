import { useState, useEffect } from "react";
import { useGetCountries } from "./hooks";
import { Header, Search, Filter, PreviewList, BackToTop } from "./components";
import useStore from "./store";

function App() {
  const filter = useStore((state: any) => state.filter);
  const name = useStore((state: any) => state.name);
  const theme = useStore((state: any) => state.theme);
  const { isLoading, isError, data } = useGetCountries(filter, name);
  const [displayBackToTop, setDisplayBackToTop] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setDisplayBackToTop(true);
    } else if (scrolled <= 300) {
      setDisplayBackToTop(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="App">
      <Header />
      <main className={`main main__${theme}`}>
        <div className="helper">
          <Search />
          <Filter />
        </div>
        <PreviewList isLoading={isLoading} error={isError} data={data} />
      </main>
      <BackToTop display={displayBackToTop} />
    </div>
  );
}

export default App;
