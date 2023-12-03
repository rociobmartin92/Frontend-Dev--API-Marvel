import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import IconStar from "../assets/IconStar";
import Input from "../components/Input";

const Ranking = () => {
  const location = useLocation();

console.log(location);
const { ranking } = location.state;
const [orderBy, setOrderBy] = useState("");
const [sortedRanking, setSortedRanking] = useState([]);
const [text, setText] = useState("");

useEffect(() => {
  const sortedArray = [...ranking].sort((a, b) => {
    if (orderBy === "asc") {
      return b.victories - a.victories;
    } else {
      return a.victories - b.victories;
    }
  });

  setSortedRanking(sortedArray);
}, [ranking, orderBy]);

const onHandleSelect = (event) => {
  setOrderBy(event.target.value);
};

const handleChange = (event) => {
  console.log(event.target.value);
};

return (
  <div className="container mt-4">
    <div className="">
      <div className="flex  justify-center">
        <IconStar color="#FFD700" />
        <h2 className="text-2xl font-bold mb-4 ml-1">Ranking</h2>
      </div>
      <select
        onChange={onHandleSelect}
        id="orderBy"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected className="sm:text-sm text-xs" value="asc">
          Mayor a menor
        </option>
        <option value="desc" className="sm:text-sm text-xs">
          Menor a mayor
        </option>
      </select>

      <Input
        type="text"
        handleChange={handleChange}
        value={text}
        placeHolder="Buscar superhéroe"
      />
    </div>
    <ul className="space-y-4">
      {sortedRanking.map((character) => (
        <li
          key={character.id}
          className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
        >
          <span className="mr-2">{character.name}</span>
          <span className="font-semibold">{character.victories} victorias</span>
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
