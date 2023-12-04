const FilteredList = ({ filteredList }) => {
  return (
    <ul className="space-y-4">
      {filteredList.map((character) => (
        <li
          key={character.id}
          className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
        >
          <span className="mr-2">{character.name}</span>
          <span className="font-semibold">{character.victories} victorias</span>
        </li>
      ))}
    </ul>
  );
};

export default FilteredList;
