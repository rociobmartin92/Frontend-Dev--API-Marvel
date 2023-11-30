import { useState } from "react";

const Play = (props) => {
  const allCharacters = props.characters;

  const [firsPlayer, setFirsPlayer] = useState({});
  const [secondPlayer, setSecondPlayer] = useState({});
  const [show, setShow] = useState(false);
  const [rounds, setRounds] = useState(0);

  const getRandomCharacter = async () => {
    const indexOne = Math.floor(Math.random() * allCharacters.length);
    let indexTwo;

    do {
      indexTwo = await Math.floor(Math.random() * allCharacters.length);
    } while (indexOne === indexTwo);

    setFirsPlayer(allCharacters[indexOne]);
    setSecondPlayer(allCharacters[indexTwo]);

    setShow(true);
  };

  function handleChange(event) {
    console.log(event.target.value);
    setRounds(event.target.value);
  }

  console.log(rounds, "ROUNDS");

  return (
    <>
      {/* {loading && <p> BUSCANDO PERSONAJES..</p>} */}
      <div className="">
        <label>Ingresa la cantidad de rounds:</label> <br /> <br />
        <input
          min={0}
          onChange={handleChange}
          type="number"
          required
          size="10"
          placeholder="0"
          className="w-[7%] pl-2"
        />
      </div>
      <button
        disabled={rounds > 0 ? false : true}
        className={
          rounds > 0
            ? "bg-red-600  text-white p-2 rounded-lg mt-4"
            : "bg-green-700  text-white p-2 rounded-lg mt-4"
        }
        onClick={() => getRandomCharacter()}
      >
        A JUGAR
      </button>
      {show && (
        <div className="sm:flex justify-center mt-7 ">
          <div className="flex-col mr-3">
            <img
              alt={firsPlayer.name}
              src={`${firsPlayer.thumbnail.path}.jpg`}
              className="h-[200px] w-[200px] rounded-md "
            />
            <p>Jugador 1 </p>
            <p>{firsPlayer.name}</p>
          </div>
          <div className="flex-col ml-3">
            <img
              alt={secondPlayer.name}
              src={`${secondPlayer.thumbnail.path}.jpg`}
              className="h-[200px] w-[200px] rounded-md "
            />
            <p>Jugador 2</p>
            <p>{secondPlayer.name}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Play;
