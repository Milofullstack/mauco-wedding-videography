import Link from "next/link";

export default function Thanks() {
  return (
    <section className="w-full min-h-screen bg-[#f9f4f2]  flex flex-col items-center justify-center text-center px-8">
      <div className=" bg-[rgb(242,236,234)] px-20 py-16 rounded-2xl border-[0.5] shadow-lg">
        <h1 className="[font-family:var(--font-playfair)] text-5xl text-[#d8b661] mb-6">
        Thank You
      </h1>
      <p className="[font-family:var(--font-cormorant)] text-xl text-gray-700 max-w-xl leading-relaxed mb-10">
        Your message has been sent successfully.  
        I’ll get back to you as soon as possible to bring your vision to life.
      </p>

      <Link
        href="/"
        className="group cursor-pointer relative isolate overflow-hidden
             inline-flex items-center justify-center
             rounded-md border border-black px-6 py-3
             [font-family:var(--font-playfair)] text-xl
             transition-transform duration-300
             hover:scale-105 active:scale-95"
      >
        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
          Back to Home
        </span>
        <span
          aria-hidden
          className="absolute inset-0 z-0 bg-[#8C8C6C] origin-bottom scale-y-0 transform-gpu
               transition-transform duration-1000 ease-out group-hover:scale-y-100"
        />
      </Link>
      </div>
    </section>
  );
}