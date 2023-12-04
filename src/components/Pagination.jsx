/* eslint-disable react/prop-types */
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(postsPerPage, totalPosts, paginate);
  return (
    <nav className="cursor-pointer">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="mx-2 border-red-800 border-2 px-2  py-1 rounded-md"
          >
            <a onClick={() => paginate(number)} href="!#" className="">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
