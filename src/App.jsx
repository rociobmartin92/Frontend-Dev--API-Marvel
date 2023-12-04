import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Characters from "./views/Characters";
import Main from "./views/Main";
import Play from "./views/Play";

import Ranking from "./views/Ranking";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/play" element={<Play />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
