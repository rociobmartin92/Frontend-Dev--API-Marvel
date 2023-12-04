/* eslint-disable react/prop-types */
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(postsPerPage, totalPosts, paginate);
  return (
    <nav className="cursor-pointer absolute bottom-0 pb-6 ml-5">
      <ul className="flex">
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
