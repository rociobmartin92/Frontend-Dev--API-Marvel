import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./views/Characters";
import Main from "./views/Main";
import Play from "./views/Play";

import { getCharacters } from "./services/characters";

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const getAll = async () => {
    const results = await getCharacters();
    setAllCharacters(results);
  };

  useEffect(() => {
    getAll();
  }, []);

  console.log(allCharacters, "All in App.js");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/characters"
            element={<Characters characters={allCharacters} />}
          />
          <Route path="/play" element={<Play characters={allCharacters} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
