import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { db } from "../firebase/conection";
import { useGetFights } from "../hooks/useGetFights";

const Play = (props) => {
  const allCharacters = props.characters;
  const [rounds, setRounds] = useState(0);
  const [winners, setWinners] = useState([]);

  const { getFights, fights } = useGetFights(allCharacters, rounds);

  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    // console.log(typeof Number(event.target.value));
    setRounds(Number(event.target.value));
  };

  const determineWinners = () => {
    const newWinners = [];

    fights.forEach((pair) => {
      const winnerInPair = pair.reduce((maxID, character) => {
        return character.id > maxID ? character.id : maxID;
      }, -1);

      const winnerCharacter = pair.find(
        (character) => character.id === winnerInPair
      );
      newWinners.push(winnerCharacter);
    });

    setWinners(newWinners);
  };

  const onHandleSetWinners = () => {
    // determineWinners();
    setShow(true);
    saveWinner();
    const saveWinner = (winners) => {
      set(ref(db, "winners/" + winners), {
        // body
      });
    };
  };

  useEffect(() => {
    determineWinners();
  }, [fights]);

  // // WRITE IN DB
  // const saveWinner = (characterId) => {
  //   set(ref(db, "winners/" + characterId), {
  //     // body
  //   });
  // };

  console.log(fights, "Fights");
  console.log(winners, "WINNERS");

  return (
    <div className="text-center">
      {/* {loading && <p> BUSCANDO PERSONAJES..</p>} */}
      <div className="">
        <label>Ingresa el número de veladas:</label> <br /> <br />
        <input
          min={0}
          onChange={handleChange}
          type="number"
          required
          size="10"
          placeholder="0"
          className="w-[9%] pl-2"
          value={rounds}
        />
      </div>
      <button
        disabled={rounds > 0 ? false : true}
        className={
          rounds > 0
            ? "bg-red-600  text-white p-2 rounded-lg mt-4"
            : "bg-green-700  text-white p-2 rounded-lg mt-4"
        }
        onClick={() => {
          setRounds(0);
          getFights();
        }}
      >
        A JUGAR
      </button>

      {!show && (
        <div className="mt-5">
          {fights.map((pair, index) => (
            <>
              {/* <p
                className=" text-lg text-red-600  font-bold mt-6"
                style={{ marginBottom: "-55px" }}
              >
                vs
              </p> */}
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginBottom: "20px",
                }}
              >
                {pair.map((character) => (
                  <div
                    key={character.id}
                    className="sm:flex justify-center mt-7 "
                  >
                    <div className="sm:flex-col mr-3 text-center">
                      <h2 className="text-red-600 mb-3 italic mt-1">
                        {character.name}
                      </h2>
                      <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={character.name}
                        className="h-[280px] w-[280px] rounded-md "
                      />
                      <p className="font-semibold mt-3 text-lg">
                        Poder: {character.id}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
          {winners.map((winner, index) => (
            <div key={winner.id} className="flex">
              <p>Ganador Velada N:{index + 1} </p>
              <p className="ml-2"> {winner.name} </p>
            </div>
          ))}
          <button onClick={() => onHandleSetWinners()}>
            Ver historial de ganadores
          </button>
        </div>
      )}

      {show && winners.map((el) => <p key={el.id}> {el.name} </p>)}
      {/* {show && ( 
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

      </div> */}
      {/* )} */}
    </div>
  );
};

export default Play;
