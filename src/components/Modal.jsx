import { Link } from "react-router-dom";

const Modal = ({ character, closeModal }) => {
  return (
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
                <p className="text-xs" key={comic.name}>
                  {comic.name}
                </p>
              ))}
            </div>
          )}
          {character.events.items.length > 0 && (
            <div>
              <p className="font-bold text-lg underline">EVENTS: </p>
              {character.events.items.map((event) => (
                <p className="text-xs" key={event.name}>
                  {event.name}
                </p>
              ))}
            </div>
          )}
          {character.series.items.length > 0 && (
            <div>
              <p className="font-bold text-lg underline">SERIES: </p>
              {character.series.items.map((serie) => (
                <p className="text-xs" key={serie.name}>
                  {serie.name}
                </p>
              ))}
            </div>
          )}
        </div>
        <Link to={character.urls[2].url} className="hover:text-xl">
          VER MÁS
        </Link>
      </div>
    </div>
  );
};

export default Modal;
