import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Search } from "./components/Search";
import { Home } from "./pages/Home/Home";
import { SearchBook } from "./pages/SearchBook/SearchBook";

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBook />} />
      </Routes>
    </div>
  );
}

export default App;
