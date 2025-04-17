import { Image } from "@heroui/image";
import { useState } from "react";

type MemeImageProps = {
  alt: string;
  src: string;
};

const MemeImage = ({ alt, src }: MemeImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      removeWrapper
      alt={alt}
      className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
      src={imgSrc}
      onError={() => setImgSrc("/assets/helpers/no-image.png")}
    />
  );
};

export default MemeImage;
