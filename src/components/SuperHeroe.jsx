/* eslint-disable react/prop-types */

const SuperHeroe = ({ character }) => {
  console.log(character);
  return (
    <div className="flex-col mr-3 text-center">
      <h2 className="text-red-600 mb-3 italic mt-1">{character.name}</h2>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="h-[280px] w-[280px] rounded-md"
      />
      <p className="font-semibold mt-3 text-lg">Poder: {character.id}</p>
    </div>
  );
};

export default SuperHeroe;
