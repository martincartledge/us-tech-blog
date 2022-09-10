import { useState } from "react";
import Image from "next/image";

export default function AuthorImage({ name, className }) {
  const imagePath = fileName => `/images/authors/${fileName}.jpg`
  const [src, setSrc] = useState(imagePath(name));

  return (
    <Image
        className={className}
        src={src}
        alt={`${name} author image`}
        width="400"
        height="400"
        onError={() => setSrc(imagePath("default"))}
    />
  );
}
