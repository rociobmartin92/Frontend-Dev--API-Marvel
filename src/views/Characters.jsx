import { useEffect, useState } from "react";
import { getCharacters } from "../services/characters";


const Characters = (props) => {
  const allCharacters = props.characters;

  const [showModal, setShowModal] = useState(false);
  const [character, setCharacter] = useState({});

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
      <h1 className=" text-2xl">Todos los personajes</h1>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 w-screen h-screen"
          >
            <div className="bg-gradient-to-r from-black via-blue-950 to-blue-900 text-white max-w-3xl p-6 rounded-md">
              {/* Content */}
              <p className="font-bold text-lg mb-5">
                Nombre: <span className="font-normal">{character.name}</span>
              </p>
              {character.description && (
                <p className="font-bold text-lg mb-5">
                  Descripción:{" "}
                  <span className="font-normal">{character.description}</span>
                </p>
              )}
              <div className="flex space-x-4">
                {character.comics.items.length > 0 && (
                  <div>
                    <p className="font-bold text-lg underline">COMICS: </p>
                    {character.comics.items.map((comic) => (
                      <p className="text-sm" key={comic.name}>
                        {comic.name}
                      </p>
                    ))}
                  </div>
                )}
                {character.events.items.length > 0 && (
                  <div>
                    <p className="font-bold text-lg underline">EVENTS: </p>
                    {character.events.items.map((event) => (
                      <p className="text-sm" key={event.name}>
                        {event.name}
                      </p>
                    ))}
                  </div>
                )}
                {character.series.items.length > 0 && (
                  <div>
                    <p className="font-bold text-lg underline">SERIES: </p>
                    {character.series.items.map((serie) => (
                      <p className="text-sm" key={serie.name}>
                        {serie.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};



export default Characters;
