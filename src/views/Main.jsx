import { useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="h-screen  flex items-center justify-center flex-col">
      <p className="font-bold border py-4 text-5xl leading-[50px] bg-red-500 w-[350px] ">
        TORNEO MARVEL
      </p>

      <div className="flex  mt-7">
        <div className=" border border-3 rounded-md w-[150px] py-1 hover:border-4 mr-2">
          <Link to="/characters">Ver personajes</Link>
        </div>
        <div className=" border border-3 rounded-md w-[150px] py-1 hover:border-4 ml-2">
          <Link to="/play"> Jugar</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
