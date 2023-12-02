import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./views/Characters";
import Main from "./views/Main";
import Play from "./views/Play";
import { getCharacters } from "./services/characters";
import { db } from "./firebase/conection";
import { ref, onValue, set } from "firebase/database";
import Ranking from "./views/Ranking";

function App() {
  const [test, setTest] = useState();

  const [allCharacters, setAllCharacters] = useState([]);
  const getAll = async () => {
    const results = await getCharacters();
    setAllCharacters(results);
  };

  useEffect(() => {
    getAll();
  }, []);

  // console.log(allCharacters, "All in App.js");

  // READ

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setTest(data);
      }
    });
  }, []);

  console.log(test);

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
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
