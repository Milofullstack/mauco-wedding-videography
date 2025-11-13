        import { cloudVideo } from "@/lib/cloudinary";
        
        export default function Parallax() {
          const videoUrl = cloudVideo("hero2_gk7fi9");
          return (
            <section className="relative w-full h-dvh px-8 md:px-16 lg:px-24 bg-white flex flex-col items-center justify-center">

        <video src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover">

        </video>
         <div className="absolute inset-0 bg-black/40"></div>
      <div className=" absolute inset-0 w-full  px-12 flex flex-col items-start justify-end mb-40 text-shadow-lg text-white text-center">
        <h2 className="text-6xl md:text-5xl lg:text-6xl mb-8 [font-family:var(--font-playfair)] font-normal">
         “Moments that last<br />Forever”
         </h2>
         </div>
       </section>)}