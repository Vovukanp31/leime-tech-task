import { MemeValidationErrorEnum } from "../enums/memeValidationError.enum";
import { IMeme } from "../interfaces/meme";
import { REGEX } from "./regex";

export const hasMemeChanges = (original: IMeme, edited: IMeme): boolean => {
  return (
    original.title !== edited.title ||
    original.image !== edited.image ||
    original.likes !== edited.likes
  );
};

export const validateMeme = (meme: IMeme): MemeValidationErrorEnum | null => {
  if (meme.title.length < 3 || meme.title.length > 100) {
    return MemeValidationErrorEnum.TITLE;
  }

  if (!REGEX.imageUrl.test(meme.image)) {
    return MemeValidationErrorEnum.IMAGE;
  }

  if (!Number.isInteger(meme.likes) || meme.likes < 0 || meme.likes > 99) {
    return MemeValidationErrorEnum.LIKES;
  }

  return null;
};
