import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/character" element={<CharacterDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
