import { useGetCountries } from "./hooks";
import { Header, Search, Filter, PreviewList } from "./components";
import useStore from "./store";

function App() {
  const filter = useStore((state: any) => state.filter);
  const name = useStore((state: any) => state.name);
  const theme = useStore((state: any) => state.theme);
  const { isLoading, isError, data } = useGetCountries(filter, name);

  return (
    <div className="App">
      <Header />
      <main className={`main main__${theme}`}>
        <div className="helper">
          <Search />
          <Filter />
        </div>
        <PreviewList isLoading={isLoading} error={isError} data={data} />
      </main> */}
    </div>
  );
}

export default App;
