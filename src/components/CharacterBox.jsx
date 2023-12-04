/* eslint-disable react/prop-types */
const CharacterBox = ({ allCharacters, onHandleChar }) => {
  return (
    <div id="characters" className="flex flex-wrap w-[90%] ">
      {allCharacters.map((char) => (
        <div
          key={char.id}
          className="m-5 font-semibold"
          onClick={() => onHandleChar(char)}
        >
          <img
            alt={char.name}
            src={`${char.thumbnail.path}.jpg`}
            className="h-[200px] w-[200px] rounded-md hover:border-2"
          />
          <p className="w-[200px] mt-3"> {char.name} </p>
        </div>
      ))}
    </div>
  );
};

export default CharacterBox;
