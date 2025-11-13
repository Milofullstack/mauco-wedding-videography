import Image from "next/image";
import {cloudVideo} from "@/lib/cloudinary";

export default function Hero() {
  const videoUrl = cloudVideo("Banner_Web_prliby");

  return (
    <section className="w-full h-dvh px-8 md:px-16 lg:px-24 bg-white flex flex-col items-center justify-center">
      <video
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-8 [font-family:var(--font-playfair)] font-normal">
          MAUCO RIQUERO
        </h1>
        <h2 className="md:text-xl [font-family:var(--font-playfair)]">
          -WEDDING VIDEOGRAPHER-
        </h2>
      </div>
    </section>
  );
}
