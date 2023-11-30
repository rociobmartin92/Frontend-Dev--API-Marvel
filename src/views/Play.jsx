import { useState } from "react";

const Play = (props) => {
  const allCharacters = props.characters;

  const [firsPlayer, setFirsPlayer] = useState({});
  const [setsecondPlayer, setSetsecondPlayer] = useState({});

  //   const getRandomCharacter = () => {
  //     const indexOne = Math.floor(Math.random() * allCharacters.length);
  //     let indexTwo;

  //     do {
  //       indexTwo = Math.floor(Math.random() * allCharacters.length);
  //     } while (indexOne === indexTwo);

  //     setFirsPlayer(allCharacters[indexOne]);
  //     setSetsecondPlayer(allCharacters[indexTwo]);
  //   };

  console.log("All in PLAY", allCharacters);

  return (
    <>
      {/* {loading && <p> BUSCANDO PERSONAJES..</p>} */}
      <p>Play</p>
      <div>
        <div>
          <img />
          <p>Jugador 1 </p>
        </div>
        <div>
          <img />
          <p>Jugador </p>
        </div>
      </div>
    </>
  );
};

export default Play;
