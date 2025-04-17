"use client";

import { Card, CardHeader, CardFooter, Button, Link } from "@heroui/react";
import { useMemes } from "../hooks/useMemes";
import HeartIcon from "../components/UI/actionImages/HeartIcon";
import MemeImage from "../components/UI/MemeImage";

const MemesList = () => {
  const { memes } = useMemes();

  return (
    <section>
      <div className="grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {memes.map((meme, i) => (
          <Card
            key={i}
            isFooterBlurred
            className="h-[400px] w-full max-w-[300px]"
          >
            <CardHeader className="absolute top-0 z-10 flex-col items-start overflow-hidden bg-black/20 backdrop-blur-sm">
              <h4 className="max-w-full truncate text-xl font-medium text-white xl:text-2xl">
                {meme.title}
              </h4>
            </CardHeader>

            <MemeImage src={meme.image} alt={`${meme.title} image`} />

            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
              <div className="flex items-center gap-2 rounded-3xl bg-black/20 px-2 py-1">
                <HeartIcon stroke="red" className="h-5" />

                <p className="text-tiny text-white">{meme.likes}</p>
              </div>
              <Button
                href={meme.image}
                as={Link}
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Image Link
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MemesList;
