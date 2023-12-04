/* eslint-disable react/prop-types */
const Pagination = ({ paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(80 / 10); i++) {
    pageNumbers.push(i);
  }
  //   console.log(postsPerPage, totalPosts, paginate);
  return (
    <nav className="cursor-pointer pb-4 ml-5">
      <ul className="flex flex-col sm:flex-row gap-y-4">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="mx-2 border-red-800 border-2 px-3  py-1 rounded-md hover:bg-gray-300 hover:text-red-800 hover:font-bold"
          >
            <a onClick={() => paginate(number)} className="">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
