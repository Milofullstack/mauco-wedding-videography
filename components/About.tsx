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
            I’m Mauco Riquero, a <span className="font-semibold">wedding videographer</span> based in Mallorca. I’m
            drawn to weddings because of the way love reveals itself in real,
            unplanned moments —the emotional, the intimate, the beautifully
            human. My style blends a <span className="font-semibold">modern documentary approach</span> with an 
            <span className="font-semibold"> editorial eye</span>, always searching for authenticity wrapped in
            elegance.
            <br /><span className="font-semibold"></span>
            <br />
            I see <span className="font-semibold">weddings as living poems</span> —written in glances, gestures, and
            the quiet rhythm of two souls becoming one story. I look for the
            warmth of a touch, the calm before a kiss, the way light embraces a
            moment just before it fades.
            <br />
            <br />
            My work isn’t about perfect poses; it’s about presence. About
            capturing what’s felt rather than what’s performed. Every image is a
            fragment of emotion —honest, elegant, and deeply human. The most
            timeless images are the ones that bring you back to how it truly
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
