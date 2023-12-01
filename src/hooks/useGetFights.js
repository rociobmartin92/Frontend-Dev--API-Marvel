import { useState } from "react";

export const useGetFights = (allCharacters, amountFights) => {
  const [fights, setFights] = useState([]);

  const getFights = () => {
    // console.log("ARRAY", Array(amountFights));
    Promise.all(
      Array(amountFights)
        .fill(0)
        .map(async (n) => {
          const figtherOne = await getRandomCharacter();
          const fighterTwo = await getRandomCharacter();

          return [figtherOne, fighterTwo];
        })
    )
      .then((response) => {
        setFights(response);
      })
      .catch((e) => console.log(e));

    // setFights(arrayFights);
  };

  const getRandomCharacter = async () => {
    const indexOne = Math.floor(Math.random() * allCharacters.length);
    let indexTwo;
    do {
      indexTwo = await Math.floor(Math.random() * allCharacters.length);
    } while (indexOne === indexTwo);

    if (indexOne > indexTwo) {
      return allCharacters[indexOne];
    }
    return allCharacters[indexTwo];
  };

  return { getFights, fights };
};
