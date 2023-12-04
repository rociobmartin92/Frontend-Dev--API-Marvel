const Select = ({ text, onHandleSelect }) => {
  return (
    <select
      disabled={text ? true : false}
      onChange={onHandleSelect}
      id="orderBy"
      className="bg-gray-50 my-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option className="sm:text-sm text-xs" value="asc">
        Mayor a menor
      </option>
      <option selected value="desc" className="sm:text-sm text-xs">
        Menor a mayor
      </option>
    </select>
  );
};

export default Select;
