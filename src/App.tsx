import { useGetCountries } from "./hooks";
import { Header, Search, Filter, PreviewList } from "./components";

function App() {
  const { isLoading, isError, data } = useGetCountries();

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
