import { Header, Search, Filter, PreviewList } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="helper">
          <Search />
          <Filter />
        </div>
        <PreviewList />
      </main>
    </div>
  );
}

export default App;
