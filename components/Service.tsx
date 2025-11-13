import { cloudVideo } from "@/lib/cloudinary";

export default function About() {
  const videoUrl = cloudVideo("vertical2_ss8uxd");
  return (
    <section className="w-full h-full xl:h-dvh bg-white px-12 md:px-16">
      <div className="w-full h-full mx-auto md:px-10 xl:px-32 flex flex-col-reverse xl:flex-row-reverse items-center justify-center gap-10 xl:gap-20">
        <div className="relative aspect-9/16 h-dvh">
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-contain py-8 "
          ></video>
        </div>
        <div className="w-full justify-evenly items-center h-dvh mx-auto px-8 md:px-8 xl:pr-8 py-12 md:py-20 bg-[#f9f4f2] ">
          <div className="w-full h-full flex flex-col gap-20 justify-evenly">
                <h2 className="[font-family:var(--font-playfair)] text-center text-[#d8b661] text-5xl md:text-7xl lg:text-7xl xl:text-6xl">
                “Love Through the Lens”
                </h2>
                <p className="[font-family:var(--font-cormorant)] font-light  text-pretty text-xl md:text-2xl  xl:text-xl text-gray-700">
                <span className="[font-family:var(--font-playfair)]  text-pretty text-2xl  xl:text-2xl text-gray-500">
                    Every love story has its own rhythm
                </span>
                —a subtle dance of glances, gestures, and silences. Through the
                lens, we dont just capture what is seen; we preserve what is felt.
                The trembling of hands before a vow, the laughter between tears,
                the light that wraps around two souls meant to find each other.
                Each frame becomes a living memory, a fragment of forever.
                <br />
                <br />
                Our vision goes beyond photography —it’s about transforming
                emotions into timeless art. We seek authenticity wrapped in
                elegance, beauty born from truth, and the quiet moments that
                reveal everything. Because love, when seen through the right eyes,
                becomes eternal.
                </p>

                <div className="w-full flex justify-center">
                                    <button
                className="group bg-white cursor-pointer relative isolate overflow-hidden
                inline-flex items-center
                rounded-md border border-black px-6 py-2
                [font-family:var(--font-playfair)] text-xl
                transition-transform duration-300
                hover:scale-105 active:scale-95"
                >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    Book Your Experience
                </span>
                <span
                    aria-hidden
                    className="absolute inset-0 z-0
                bg-[#8C8C6C]
                origin-bottom scale-y-0 transform-gpu
                transition-transform duration-1000 ease-out
                group-hover:scale-y-100"
                />
                </button>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
