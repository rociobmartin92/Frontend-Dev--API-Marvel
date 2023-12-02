import { ref, set, get } from "firebase/database";
import { db } from "../firebase/conection";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import IconStar from "../assets/IconStar";

const Ranking = () => {
  const location = useLocation();
  const { ranking } = location.state;

  const sortedRanking = ranking.sort((a, b) => b.victories - a.victories);

  return (
    <div className="container mt-4">
      <div className="flex  justify-center">
        <IconStar color="#FFD700" />
        <h2 className="text-2xl font-bold mb-4 ml-1">Ranking</h2>
      </div>
      <ul className="space-y-4">
        {sortedRanking.map((character) => (
          <li
            key={character.id}
            className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
          >
            <span className="mr-2">{character.name}</span>
            <span className="font-semibold">
              {character.victories} victorias
            </span>
          </li>
        ))}
      </ul>
      <Link
        to="/play"
        className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-4"
      >
        Volver a jugar
      </Link>
    </div>
  );
};

export default Ranking;
