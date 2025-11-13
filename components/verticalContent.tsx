import { cloudVideo } from "@/lib/cloudinary";

export default function VerticalContent() {
  const videoUrl1 = cloudVideo("Vertical_Son_Berga");
  const videoUrl2 = cloudVideo("Vertical2");
  return (
    <section className="w-full h-full xl:h-dvh bg-[#f9f4f2]">
      <div className="w-full h-full flex flex-col-reverse px-8 md:px-16 lg:px-10 lg:flex-row-reverse  items-center justify-center gap-4 md:gap-0">
        {/* video */}
        <div className="relative aspect-9/16 h-dvh ">
          <video
            src={videoUrl1}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-contain py-8"
          ></video>
        </div>
        <div className="w-full h-full lg:h-dvh mx-auto lg:px-8 xl:px-10 py-12 xl:py-20 xl:w-2/3  flex flex-col gap-20 md:gap-30 lg:gap-10 justify-between items-center">
          <h2 className="[font-family:var(--font-playfair)] text-[#cdab56] font-normal text-7xl md:text-6xl text-center">
            Media content
          </h2>
          <p className="[font-family:var(--font-cormorant)] font-light text-pretty text-2xl  md:text-2xl xl:text-2xl text-gray-700">
            In a world that lives on movement and emotion, vertical content
            becomes the heartbeat of each celebration. We capture the essence of
            the wedding in a cinematic, intimate format —perfect for sharing,
            remembering, and feeling again. Every clip is designed to evoke, not
            just to show. We blend rhythm, light, and storytelling to create
            short films that breathe emotion and luxury in every frame. Because
            your story deserves to be told beautifully —in every format, on
            every screen.
          </p>
          <div className="w-full flex justify-center xl:justify-center ">
            <button
              className="group cursor-pointer relative isolate overflow-hidden
             inline-flex items-center
             rounded-md border border-black px-6 py-2
             [font-family:var(--font-playfair)] text-xl
             transition-transform duration-300
             hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Start Your Story
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
        <div className="relative aspect-9/16 h-dvh hidden 2xl:block">
          <video
            src={videoUrl2}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-contain py-8"
          ></video>
        </div>
      </div>
    </section>
  );
}
