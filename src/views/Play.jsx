import { useEffect, useState } from "react";
import { ref, onValue, set, push, get } from "firebase/database";
import { db } from "../firebase/conection";
import { useGetFights } from "../hooks/useGetFights";
import { Link } from "react-router-dom";
import Game from "../assets/Game";
import Input from "../components/Input";

const Play = (props) => {
  const allCharacters = props.characters;
  const [rounds, setRounds] = useState(0);
  const [winners, setWinners] = useState([]);
  const [ranking, setRanking] = useState([]);

  const { getFights, fights } = useGetFights(allCharacters, rounds);

  const onHandleSetWinners = () => {
    const nodo = ref(db, "winners");
    const newWinners = [...winners];

    newWinners.forEach((winner) => {
      const winnerRef = ref(db, `winners/${winner.id}`);

      // Obtengo los datos actuales del ganador
      get(winnerRef).then((snapshot) => {
        if (snapshot.exists()) {
          const currentData = snapshot.val();

          const currentVictories = currentData.victories || 0;

          const newVictories = currentVictories + 1;

          set(winnerRef, {
            ...currentData,
            victories: newVictories,
          });
        } else {
          set(winnerRef, {
            id: winner.id,
            name: winner.name,
            victories: 1,
          });
        }
      });
    });
  };

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

  useEffect(() => {
    determineWinners();
  }, [fights]);

  useEffect(() => {
    const nodo = ref(db, "winners");

    const unsubscribe = onValue(nodo, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const characterList = Object.values(data).map((character) => ({
          id: character.id,
          name: character.name,
          victories: character.victories || 0,
        }));

        setRanking(characterList);
      }
    });

    return () => unsubscribe();
  }, [winners]);

  return (
    <div className="text-center p-8">
      <Input
        handleChange={handleChange}
        value={rounds}
        label="Ingresa el número de veladas:"
        type="number"
        placeHolder="0"
      />
      <button
        disabled={rounds > 0 ? false : true}
        className={`${
          rounds === 0 ? "bg-gray-500" : "bg-green-700"
        } text-white p-2 rounded-lg mt-4`}
        onClick={() => {
          setRounds(0);
          getFights();
        }}
      >
        <div className="flex items-center">
          <Game /> <span className="ml-1">A JUGAR </span>
        </div>
      </button>

      <div className="mt-5 space-y-8">
        {fights.map((pair, index) => (
          <>
            <div className="grid grid-cols-1 divide-y divide-gray-600">
              <div></div>
              <div>
                <p className="my-2 text-gray-600">Velada N:{index + 1} </p>
              </div>
              <div></div>
            </div>
            <div key={index} className="flex justify-around">
              {pair.map((character) => (
                <div key={character.id} className="flex-col mr-3 text-center">
                  <h2 className="text-red-600 mb-3 italic mt-1">
                    {character.name}
                  </h2>
                  <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                    className="h-[280px] w-[280px] rounded-md"
                  />
                  <p className="font-semibold mt-3 text-lg">
                    Poder: {character.id}
                  </p>
                </div>
              ))}
            </div>
          </>
        ))}
        {winners.map((winner, index) => (
          <div key={winner.id} className="flex">
            <p>Ganador Velada N:{index + 1}</p>
            <p className="ml-2">{winner.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Link
          onClick={() => onHandleSetWinners()}
          to="/ranking"
          state={{ ranking: ranking }}
          className="text-blue-500 hover:underline"
        >
          Ver historial de ganadores
        </Link>
      </div>
    </div>
  );
};

export default Play;
