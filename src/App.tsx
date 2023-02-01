import { useGetCountries } from "./hooks";
import { Header, Search, Filter, PreviewList } from "./components";
import useStore from "./store";

function App() {
  const filter = useStore((state: any) => state.filter);
  const { isLoading, isError, data } = useGetCountries(filter);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="helper">
          <Search />
          <Filter />
        </div>
        <PreviewList isLoading={isLoading} error={isError} data={data} />
      </main>
    </div>
  );
}

export default App;
