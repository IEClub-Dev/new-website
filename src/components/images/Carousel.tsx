"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  stepTime?: number;
}

export default function Carousel({ images, stepTime = 5000 }: CarouselProps) {
  const [carouselOffset, setCarouselOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselOffset((carouselOffset) =>
        (carouselOffset + 1) % images.length
      );
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <ul
        className="flex list-none w-screen transition-[transform] duration-500"
        style={{ transform: `translateX(-${carouselOffset * 100}vw)` }}
      >
        {images.map((im, i) => (
          <li
            key={i}
            className="h-[90vh] sm:h-[70vh] w-full relative flex-shrink-0"
          >
            <Image src={im.src} alt={im.alt} fill className="object-cover">
            </Image>
          </li>
        ))}
      </ul>
    </div>
  );
}
