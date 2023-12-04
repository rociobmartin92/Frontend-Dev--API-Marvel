/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import CharacterBox from "../components/CharacterBox";
import Pagination from "../components/Pagination";
import { Spinner } from "@material-tailwind/react";
import Back from "../assets/Back";
import { getCharacters } from "../services/characters";

const Characters = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [character, setCharacter] = useState({});

  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const onHandleChar = (item) => {
    setCharacter(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const getAll = async () => {
    setLoading(true);
    const results = await getCharacters({ limit: 10, offset });
    setAllCharacters(results);
    setLoading(false);
  };

  useEffect(() => {
    getAll();
  }, [offset]);

  // Obtener actuales posts

  // Cambiar página
  const paginate = (pageNumbers) => setOffset(10 * (pageNumbers - 1));

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto items-center justify-center ">
      <CharacterBox onHandleChar={onHandleChar} allCharacters={allCharacters} />
      <Pagination paginate={paginate} />
      {showModal ? (
        <Modal character={character} closeModal={closeModal} />
      ) : null}
    </div>
  );
};

export default Characters;
