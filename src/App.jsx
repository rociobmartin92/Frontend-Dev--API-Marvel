import "./App.css";
import Characters from "./views/Characters";
import Main from "./views/Main";
import Play from "./views/Play";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
