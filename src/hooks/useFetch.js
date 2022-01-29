import { useEffect, useState } from "react";
import { DUMMY_GIPHY_URL, GIPHY_API_BASE_URL } from "../utils/constants";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState(DUMMY_GIPHY_URL);

  const url = `${GIPHY_API_BASE_URL}/search?api_key=${API_KEY}&q=${keyword
    .split(" ")
    .join("")}&limit=1`;
  const fetchGifs = async () => {
    try {
      const response = await fetch(url);
      const { data } = await response.json();
      if (data.length) {
        setGifUrl(data[0]?.images?.downsized_medium?.url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchGifs();
    }
  }, [keyword]);
  return gifUrl;
};

export default useFetch;
