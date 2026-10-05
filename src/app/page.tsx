import { Mail } from "@nine-thirty-five/material-symbols-react/rounded/filled";

import Carousel from "../components/images/Carousel.tsx";
import { GenericButton } from "../components/GenericButton.tsx";

const IMAGES = [
  {
    src: "/club1.png",
    alt:
      "Image of club members during KFUPM Annual Club Activities Celebration",
  }, // need better res image (this looks baaaaad)
  {
    src: "/club1.png",
    alt:
      "Image of club members during KFUPM Annual Club Activities Celebration",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative">
        <Carousel images={IMAGES}></Carousel>
        <div className="absolute top-0 left-0 size-full bg-black/70 flex items-center justify-center flex-col">
          <h1 className="text-7xl font-bold">
            Welcome to the <p className="text-ie-red inline">IE Club</p>!
          </h1>
          <p className="text-lg text-center my-[50px]">
            Unleash your potential in intellectual & electronic sports.
            <br />
            Join our vibrant community of gamers and puzzle enthusiasts.
          </p>
          <div className="flex gap-7 pb-10">
            <GenericButton size="lg">
              Join
            </GenericButton>
            <GenericButton size="lg" className="gap-5">
              Newsletter <Mail size={40} />
            </GenericButton>
          </div>
          <div>Some cool stats here (TBA)</div>
        </div>
      </div>
      <div className="text-center">Rest of the content here (TBA)</div>
    </>
  );
}
