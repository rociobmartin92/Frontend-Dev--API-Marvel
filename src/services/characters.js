import axios from "axios";

const apiKeyParam = `apikey=${import.meta.env.VITE_PUBLIC_KEY}`;

export const getCharacters = async () => {
  const url = `${
    import.meta.env.VITE_PUBLIC_URL
  }/characters?${apiKeyParam}&limit=100`;

  try {
    const response = await axios.get(url);
    // console.log("all characters", response.data.data.results);
    return response.data.data.results;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getSingularCharacter = async (id) => {
  const url = `${
    import.meta.env.VITE_PUBLIC_URL
  }/characters/${id}?${apiKeyParam}`;

  try {
    const response = await axios.get(url);
    // console.log("singular character", response.data.data.results[0]);
    return response.data.data.results[0];
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};


