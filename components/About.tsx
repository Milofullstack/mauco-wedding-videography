import { cloudImage } from "@/lib/cloudinary";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const imageUrl = cloudImage("mauco1_yxxz5l");

  return (
    <section id="about" className="w-full bg-white">
      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-4 xl:gap-0">
        {/* FOTO */}
        <div className="relative w-full h-[80svh] md:h-dvh md:w-1/2 pb-12">
          <Image
            src={imageUrl}
            alt="Personal portrait"
            fill
            sizes="100vw"
            className="object-cover object-top shadow-2xl"
          />
        </div>

        {/* TEXTO */}
        <div className="w-full mx-auto px-8 xl:pr-36 py-12 md:w-1/2 flex flex-col gap-20 md:gap-10 justify-center items-start md:h-dvh">
          <h2 className="[font-family:var(--font-playfair)] text-2xl md:text-3xl xl:text-4xl">
            About me
          </h2>
          <p className="[font-family:var(--font-cormorant)] font-light text-pretty text-center md:text-start text-xl xl:text-2xl text-gray-700">
            I see weddings as living poems, woven from glances, gestures, and
            the quiet rhythm of two souls becoming one story. Through a modern
            documentary and editorial eye, I seek the beauty that unfolds
            naturally, the warmth of a touch, the calm before a kiss, the way
            light wraps around a moment just before it fades. My work is not all
            about perfect poses, but about presence. About feeling rather than
            showing. Each image is a fragment of emotion, an echo of the energy
            that surrounds every couple, honest, elegant, and deeply human. I
            believe the most timeless photographs are those that dont try too
            hard, the ones that breathe, that move, that remind you how it all
            felt.
          </p>

          <div className="w-full flex justify-center xl:justify-center">
            <Link href="#contact">
              <button
                className="group cursor-pointer relative isolate overflow-hidden
               inline-flex items-center
               rounded-md border border-black px-6 py-2
               [font-family:var(--font-playfair)] text-xl
               transition-transform duration-300
               hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Inquire Now
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 z-0
                 bg-[#c6ac6f] 
                 origin-bottom scale-y-0 transform-gpu
                 transition-transform duration-1000 ease-out
                 group-hover:scale-y-100"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
