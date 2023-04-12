import { useEffect, useState } from "react";

let isLoadingWord = false;

const getRandomWords = async () => {
  if (!isLoadingWord) {
    isLoadingWord = true;

    const data = await fetch(
      "https://clientes.api.greenborn.com.ar/public-random-word?c=5&l=5"
    );
    const json = await data.json();

    isLoadingWord = false;
    return json.filter((word) => word.length === 5) || [];
  }
};

export const useWord = () => {
  const [word, setWord] = useState("");

  useEffect(() => {
    getRandomWords().then((words) => {
      setWord(words[Math.floor(Math.random() * words.length)]);
    });
  }, []);

  return {
    word,
  };
};
