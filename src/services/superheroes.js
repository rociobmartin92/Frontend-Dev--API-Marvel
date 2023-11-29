import axios from "axios";

const apiKeyParam = `apikey=${import.meta.env.VITE_PUBLIC_KEY}`;

export const getCharacters = async () => {
  const url = `${import.meta.env.VITE_PUBLIC_URL}/characters?${apiKeyParam}`;

  try {
    const response = await axios.get(url);
    console.log(response.data.data.results);
    return response.data.data.results;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
