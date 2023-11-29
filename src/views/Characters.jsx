import { useEffect, useState } from "react";
import { getCharacters } from "../services/characters";

const Characters = () => {
  const [allCharacters, setAllCharacters] = useState([]);

  const getAll = async () => {
    const results = await getCharacters();
    setAllCharacters(results);
  };

  useEffect(() => {
    getAll();
  }, []);

  console.log(allCharacters);

  return (
    <div id="characters" className="h-[100%]">
      {allCharacters.map((char) => (
        <div key={char.id}>
          <p> {char.name} </p>
          <img
            alt={char.name}
            src={`${char.thumbnail.path}.jpg`}
            className="h-[20%] w-[20%] "
          />
        </div>
      ))}
    </div>
  );
};

export default Characters;
