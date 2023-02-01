import { Header, Search, Filter } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="helper">
          <Search />
          <Filter />
        </div>
      </main>
    </div>
  );
}

export default App;
