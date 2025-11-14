import { cloudVideo } from "@/lib/cloudinary";

export default function Video(){
    const videoUrl = cloudVideo("Alfabia");

    return(
        <section id="view" className="relative w-full h-dvh  bg-white flex flex-col items-center justify-center">
        <video src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover">

        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 w-full lg:w-3/5 px-8 md:px-14 xl:pl-18 2xl:pl-12 flex flex-col items-center justify-center gap-10 text-shadow-lg text-[#cdab56] text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-8 [font-family:var(--font-playfair)] font-normal">
         “Love Through <br />the Lens”
        </h2><p className="[font-family:var(--font-cormorant)] font-bold  text-pretty text-start text-xl md:text-2xl  xl:text-2xl text-white text-shadow-lg">
                <span className="[font-family:var(--font-playfair)]  text-pretty text-2xl  xl:text-2xl text-gray-200  ">
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
      </div>
        </section>
    )
}