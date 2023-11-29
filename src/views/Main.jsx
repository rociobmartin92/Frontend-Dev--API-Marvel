import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="h-screen  flex items-center justify-center flex-col">
      <p className="font-bold border py-4 text-5xl leading-[50px] bg-red-500 w-[350px] ">
        TORNEO MARVEL
      </p>

      <div className="flex-row  mt-7">
        <Link
          to="/characters"
          className=" border border-3 rounded-md w-[150px] py-1 hover:border-4 mr-3"
        >
          Ver personajes
        </Link>
        <button className=" border border-3 rounded-md w-[150px] py-1 hover:border-4 ml-3">
          Jugar
        </button>
      </div>
    </div>
  );
};

export default Main;
