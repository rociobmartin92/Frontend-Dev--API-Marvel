import { useEffect, useState } from "react";
import getCharacters from "../services/characters";

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

  return <div>Characters</div>;
};

export default Characters;
