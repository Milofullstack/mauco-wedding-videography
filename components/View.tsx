import { cloudVideo } from "@/lib/cloudinary";
import Link from "next/link";

export default function View() {
  const videoUrl = cloudVideo("Alfabia");

  return (
    <section
      id="view"
      className="relative w-full h-svh overflow-hidden bg-white flex flex-col items-center justify-center"
    >
      <video
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 w-full max-w-7xl mx-auto px-8 md:px-14 xl:pl-18 2xl:pl-12 flex flex-col items-center justify-center gap-10 text-shadow-lg text-[#cdab56] text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 [font-family:var(--font-playfair)] font-normal">
          “Love Through <br />
          the Lens”
        </h2>
        <p className="[font-family:var(--font-cormorant)] font-bold  text-pretty text-center text-sm md:text-2xl   text-white text-shadow-md">
          <span className="[font-family:var(--font-playfair)]  text-pretty text-sm md:text-2xl text-gray-200  ">
            Every love story has its own rhythm
          </span>
          — a subtle dance of movements, emotions, and quiet pauses. Through my
          lens, I don’t just capture what is seen; I preserve what is felt. The
          trembling of hands before a vow, the laughter between tears, the way
          light rests on two souls meant to find each other. Each frame becomes
          a living memory, a fragment of forever.
          <br />
          <br />
          My vision goes beyond photography —it’s about transforming emotions
          into timeless art. I look for authenticity wrapped in elegance, beauty
          born from truth, and the soft moments that reveal everything. Because
          love, when seen through the right eyes, becomes eternal.
        </p>
        <div>
          <a
            href="https://www.youtube.com/watch?v=-0J8M0ChK94"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer relative isolate overflow-hidden
               inline-flex items-center
               rounded-md border border-white text-white px-6 py-2
               [font-family:var(--font-playfair)] text-xl
               transition-transform duration-300
               hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Watch the full ceremony
            </span>

            <span
              aria-hidden
              className="absolute inset-0 z-0
                   bg-[#c6ac6f] 
                   origin-bottom scale-y-0 transform-gpu
                   transition-transform duration-1000 ease-out
                   group-hover:scale-y-100"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
