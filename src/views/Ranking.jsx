import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import Cup from "../assets/Cup";
import Select from "../components/Select";
import FilteredList from "../components/FilteredList";

const Ranking = () => {
  const location = useLocation();

  const { ranking } = location.state;
  const [orderBy, setOrderBy] = useState("");
  const [text, setText] = useState("");
  const [filteredList, setFiltered] = useState([]);

  useEffect(() => {
    const sortedArray = [...ranking].sort((a, b) => {
      if (orderBy === "asc") {
        return b.victories - a.victories;
      } else {
        return a.victories - b.victories;
      }
    });

    setFiltered(sortedArray);
  }, [ranking, orderBy]);

  const onHandleSelect = (event) => {
    setOrderBy(event.target.value);
  };

  const handleChange = (event) => {
    setText(event.target.value);
    const filteredCharacters = ranking.filter((character) =>
      character.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filteredCharacters);
  };

  return (
    <div className="container mx-auto">
      <div className="flex  pt-10 justify-center">
        <Cup color="#FFD700" />
        <h2 className="text-2xl font-bold ml-1">Ranking</h2>
      </div>
      <Select text={text} onHandleSelect={onHandleSelect} />
      <Input
        type="text"
        handleChange={handleChange}
        value={text}
        placeHolder="Buscar superhéroe"
      />
      <FilteredList filteredList={filteredList} />
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
