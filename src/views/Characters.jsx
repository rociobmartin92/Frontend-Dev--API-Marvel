import { useEffect, useState } from "react";
import { getCharacters } from "../services/characters";


const Characters = () => {
  const [showModal, setShowModal] = useState(false);
  const [allCharacters, setAllCharacters] = useState([]);
  const [character, setCharacter] = useState({});

  const getAll = async () => {
    const results = await getCharacters();
    setAllCharacters(results);
  };

  useEffect(() => {
    getAll();
  }, []);

  console.log(allCharacters);
  console.log("ShowModal", showModal);

  const onHandleChar = (item) => {
    setCharacter(item);
    setShowModal(true);
  };
  console.log("Character", character);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1>Todos los personajes</h1>
      <div id="characters" className="h-screen w-screen flex flex-wrap ">
        {allCharacters.map((char) => (
          <div
            key={char.id}
            className=" m-5 font-semibold"
            onClick={() => onHandleChar(char)}
          >
            <img
              alt={char.name}
              src={`${char.thumbnail.path}.jpg`}
              className="h-[180px] w-[180px] rounded-md hover:border-2"
            />
            <p className="w-[180px] mt-3"> {char.name} </p>
          </div>
        ))}

        {showModal ? (
          <div
            onClick={closeModal}
            className="  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*Content*/}
              <p className="font-bold text-lg mb-5">Nombre: {character.name}</p>
              {character.description && (
                <p className="font-bold text-lg mb-5">
                  Descripción: {character.description}
                </p>
              )}
              <div className="flex">
                <div>
                  <p className="font-bold text-lg">COMICS: </p>
                  {character.comics.items.map((comic) => (
                    <p className="text-xs sm:text-sm" key={comic.name}>
                      {comic.name}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-lg">EVENTS: </p>
                  {character.events.items.map((event) => (
                    <p className="text-xs sm:text-sm" key={event.name}>
                      {event.name}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-lg">SERIES: </p>
                  {character.series.items.map((serie) => (
                    <p className="text-xs sm:text-sm" key={serie.name}>
                      {serie.name}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};



export default Characters;
