import { useState, useEffect } from "react";
import { IMeme } from "../interfaces/meme";
import { DEFAULT_MEMES } from "../constants/memes";

const MEMES_KEY = "memes";

export const useMemes = () => {
  const [memes, setMemes] = useState<IMeme[]>([]);

  useEffect(() => {
    const storedMemes = localStorage.getItem(MEMES_KEY);
    if (storedMemes) {
      setMemes(JSON.parse(storedMemes));
    } else {
      setMemes(DEFAULT_MEMES);
      localStorage.setItem(MEMES_KEY, JSON.stringify(DEFAULT_MEMES));
    }
  }, []);

  const updateMeme = (updatedMeme: IMeme): void => {
    const updatedMemes = memes.map((meme) =>
      meme.id === updatedMeme.id ? updatedMeme : meme
    );
    setMemes(updatedMemes);
    localStorage.setItem(MEMES_KEY, JSON.stringify(updatedMemes));
  };

  return { memes, updateMeme };
};
