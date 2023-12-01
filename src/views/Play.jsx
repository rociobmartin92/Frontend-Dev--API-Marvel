import { useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { db } from "../firebase/conection";
import { useGetFights } from "../hooks/useGetFights";

const Play = (props) => {
  const allCharacters = props.characters;
  const [rounds, setRounds] = useState(0);

  const { getFights, fights } = useGetFights(allCharacters, rounds);

  // const [firsPlayer, setFirsPlayer] = useState({});
  // const [secondPlayer, setSecondPlayer] = useState({});
  // const [indexOne, setIndexOne] = useState(0);
  // const [indexTwo, setIndexTwo] = useState(0);
  // const [show, setShow] = useState(false);
  // const [winner, setWinner] = useState({});

  const handleChange = (event) => {
    // console.log(typeof Number(event.target.value));
    setRounds(Number(event.target.value));
  };

  // WRITE IN DB

  const saveWinner = (characterId) => {
    set(ref(db, "winners/" + characterId), {
      // body
    });
  };

  // console.log(rounds, "ROUNDS");
  // console.log(winner, "WINNER");
  console.log(fights, "Fights");

  return (
    <div className="text-center">
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
          className="w-[9%] pl-2"
        />
      </div>
      <button
        disabled={rounds > 0 ? false : true}
        className={
          rounds > 0
            ? "bg-red-600  text-white p-2 rounded-lg mt-4"
            : "bg-green-700  text-white p-2 rounded-lg mt-4"
        }
        onClick={() => getFights()}
      >
        A JUGAR
      </button>

      {/* {show && ( */}
      {/* <div>
        <div className="sm:flex justify-center mt-7 ">
          <div className="sm:flex-col mr-3 text-center">
            <p className="mb-3">Jugador 1 </p>
            <img
              alt={firsPlayer.name}
              src={`${firsPlayer.thumbnail.path}.jpg`}
              className="h-[240px] w-[240px] rounded-md "
            />
            <p className="text-red-600 mb-3 italic mt-1">{firsPlayer.name}</p>
            <p className="font-semibold text-lg">Poder: {indexOne}</p>
          </div>
          <div className="flex-col ml-3 ">
            <p className=" mb-3">Jugador 2</p>
            <img
              alt={secondPlayer.name}
              src={`${secondPlayer.thumbnail.path}.jpg`}
              className="h-[240px] w-[240px] rounded-md "
            />
            <p className="text-red-600 mb-3 italic mt-1">{secondPlayer.name}</p>
            <p className="font-semibold text-lg">Poder: {indexTwo}</p>
          </div>
        </div>
        <p className="font-semibold text-lg mt-5">GANADOR: </p>
      </div> */}
      {/* )} */}
    </div>
  );
};

export default Play;
