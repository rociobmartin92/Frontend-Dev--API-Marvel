import "./App.css";
import { getCharacters } from "./services/superheroes";

function App() {
  const firtCharacter = getCharacters();

  console.log(firtCharacter);

  return (
    <>
      <p className="font-bold text-3xl bg-red-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
