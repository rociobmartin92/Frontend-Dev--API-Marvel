/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "../components/Modal";
import CharacterBox from "../components/CharacterBox";
import Pagination from "../components/Pagination";
import { Spinner } from "@material-tailwind/react";

const Characters = (props) => {
  const allCharacters = props.characters;
  const loading = props.loading;

  const [showModal, setShowModal] = useState(false);
  const [character, setCharacter] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const onHandleChar = (item) => {
    setCharacter(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Obtener actuales posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allCharacters.slice(indexOfFirstPost, indexOfLastPost);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // console.log("LOADIG", loading);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-screen h-screen items-center justify-center">
      <CharacterBox onHandleChar={onHandleChar} allCharacters={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={allCharacters.length}
        paginate={paginate}
      />
      {showModal ? (
        <Modal character={character} closeModal={closeModal} />
      ) : null}
    </div>
  );
};

export default Characters;
