import { useState } from "react";
import { db } from "../firebase/conection";
import { ref, onValue } from "firebase/database";

export const useGetRanking = () => {
  const [ranking, setRanking] = useState([]);

  const getRanking = () => {
    const nodo = ref(db, "winners");
    const unsubscribe = onValue(nodo, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const characterList = Object.values(data).map((character) => ({
          id: character.id,
          name: character.name,
          victories: character.victories || 0,
        }));

        setRanking(characterList);
      }
    });

    return () => unsubscribe();
  };
  return { ranking, getRanking };
};
