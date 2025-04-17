import { IMeme } from "../interfaces/meme";

export const DEFAULT_MEMES: IMeme[] = [
  {
    id: 1,
    title: "Surprised Pikachu",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_surprised_shocked_pikachu.png",
    likes: getRandomLikes(),
  },
  {
    id: 2,
    title: "Handsome Squidward",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_handsome_squidward.png",
    likes: getRandomLikes(),
  },
  {
    id: 3,
    title: "Pepe",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_sad_frog.png",
    likes: getRandomLikes(),
  },
  {
    id: 4,
    title: "Homer Simpson",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_homer_simpson_bushes.png",
    likes: getRandomLikes(),
  },
  {
    id: 5,
    title: "Crying Cat",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_crying_cat.png",
    likes: getRandomLikes(),
  },
  {
    id: 6,
    title: "Doge",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_doge_dog.png",
    likes: getRandomLikes(),
  },
  {
    id: 7,
    title: "Roll Safe",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_roll_safe.png",
    likes: getRandomLikes(),
  },
  {
    id: 8,
    title: "Hide the Pain",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_hide_the_pain_harold.png",
    likes: getRandomLikes(),
  },
  {
    id: 9,
    title: "Facepalm",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_facepalm.png",
    likes: getRandomLikes(),
  },
  {
    id: 10,
    title: "Awkward Monkey",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_awkward_look_monkey_puppet.png",
    likes: getRandomLikes(),
  },
];

function getRandomLikes(): number {
  return Math.floor(Math.random() * 100);
}
