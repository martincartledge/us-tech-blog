import { useState } from "react";
import Image from "next/image";

export default function CategoryImage({ category, className }) {
  const imagePath = (fileName) => `/images/categories/${fileName}.png`;
  const [src, setSrc] = useState(imagePath(category));

  return (
    <Image
      className={className}
      src={src}
      alt={`${category} hero image`}
      width="1280"
      height="720"
      objectFit="cover"
      onError={() => setSrc(imagePath("default"))}
    />
  );
}
