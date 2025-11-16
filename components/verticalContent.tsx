import { cloudVideo } from "@/lib/cloudinary";
import Link from "next/link";

export default function VerticalContent() {
  const videoUrl1 = cloudVideo("Vertical_Son_Berga");
  const videoUrl2 = cloudVideo("vertical2_ss8uxd");
  return (
    <section className="w-full h-full xl:h-dvh bg-[#f9f4f2]">
      <div className="w-full h-full flex flex-col-reverse px-8 md:px-16 lg:px-10 lg:flex-row-reverse  items-center justify-between gap-4 md:gap-0">
        {/* video */}
        <div className="relative aspect-9/16 h-svh ">
          <video
            src={videoUrl1}
            autoPlay
            muted
            loop
            playsInline
            controls
            controlsList="nodownload noremoteplayback"
            preload="metadata"
            className="absolute inset-0 w-full h-full object-contain py-8"
          ></video>
        </div>
        <div className="w-full h-full lg:h-dvh  lg:px-8 xl:px-8 py-10 xl:py-8 xl:w-2/3  flex flex-col gap-20 md:gap-30 lg:gap-10 justify-between items-center">
          <h2 className="[font-family:var(--font-cormorant)] text-[#cdab56] font-normal text-5xl md:text-6xl text-center">
            Media content
          </h2>
          <p className="[font-family:var(--font-cormorant)] font-light text-pretty text-xl md:text-2xl   xl:text-2xl text-gray-700">
I offer dedicated <span className="font-bold">Media Content Packages</span> for couples who want their wedding day to be felt, not just remembered.
I create vertical content made for Instagram, TikTok, and every place where your story continues.
<br /><br />

Whether you already have a photographer or not, these packages fit seamlessly into your wedding coverage. And while traditional edits take time, my vertical clips are delivered <span className="font-bold">within 24 hours</span> —ready to share the very next day.

I work alongside your team or independently, capturing emotion, atmosphere, and the brief moments that become unforgettable.
<br /><br />
Because some memories can’t wait.
          </p>
          <div className="w-full flex justify-center xl:justify-center ">
          <Link href= "#contact">
                      <button
              className="group cursor-pointer relative isolate overflow-hidden
             inline-flex items-center
             rounded-md border border-black px-6 py-2
             [font-family:var(--font-playfair)] text-xl
             transition-transform duration-300
             hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Media Content Packages
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
          </Link>
          </div>
        </div>
        <div className="relative aspect-9/16 h-svh hidden 2xl:block">
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
