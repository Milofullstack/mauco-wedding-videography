"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/mgvrejdv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      router.push("/thanks"); // 👈 redirige a tu propia página
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="w-full min-h-[80dvh] bg-[#f9f4f2] flex flex-col lg:flex-row items-center gap-16 lg:gap-0 justify-center px-8 py-20"
    >
     <div className="w-full lg:w-1/2 px-4 flex justify-center">
  <div className="w-full  px-4 flex flex-col items-center justify-center">

  <h2 className="[font-family:var(--font-cormorant)] text-center text-4xl text-[#d8b661] mb-10">
    Wedding Packages
  </h2>

  {/* === Card 1: Social Media Services === */}
  <div className="w-full bg-[#f4eee9] border text-center border-[#d8b661]/40 shadow-md rounded-xl p-6 mb-8">
    <h3 className="[font-family:var(--font-cormorant)] text-2xl text-black mb-3">
      Social Media Services
    </h3>

    <p className="[font-family:var(--font-playfair)] text-gray-700 leading-relaxed mb-4">
      Capture the emotion and energy of your day in short, cinematic pieces designed
      for social media — delivered within the first 24 hours so you can relive and
      share your wedding instantly.
    </p>

    <ul className="space-y-2 text-lg [font-family:var(--font-playfair)] text-gray-700">
      <li className="flex items-start gap-2">
        <span className="text-[#d8b661] mt-1.5">—</span>
        24h Highlight Reel
      </li>
      <li className="flex items-start gap-2">
        <span className="text-[#d8b661] mt-1.5">—</span>
        Extra Short Reels for Instagram / TikTok
      </li>
      <li className="flex items-start gap-2">
        <span className="text-[#d8b661] mt-1.5">—</span>
        Candid Glimpses of your Day
      </li>
    </ul>
  </div>

  {/* === Card 2: Wedding Videography === */}
  <div className="w-full text-center bg-[#f4eee9] border border-[#d8b661]/40 shadow-md rounded-xl p-6 mb-10">
    <h3 className="[font-family:var(--font-cormorant)] text-2xl text-black mb-3">
      Wedding Videography
    </h3>

    <p className="[font-family:var(--font-playfair)] text-gray-700 leading-relaxed mb-4">
      A handcrafted wedding film that blends storytelling, emotion and cinematic visuals.
      Your memories preserved with intention and elegance.
    </p>

    <ul className="space-y-2 text-lg [font-family:var(--font-playfair)] text-gray-700">
      <li className="flex items-start gap-2">
        <span className="text-[#d8b661] mt-1.5">—</span>
        10-minute Documentary Film
      </li>
      <li className="flex items-start gap-2">
        <span className="text-[#d8b661] mt-1.5">—</span>
        2-minute Cinematic Highlights
      </li>
      <li className="flex items-start gap-2">
        <span className="text-[#d8b661] mt-1.5">—</span>
        Full Speeches (clean audio)
      </li>
    </ul>
  </div>

  {/* === Texto emocional invitando al formulario === */}
  <p className="[font-family:var(--font-playfair)] text-gray-700 text-lg leading-relaxed">
    If you'd like to explore these packages more deeply or see what fits your wedding best,  
    you can reach out through the form beside this section. I’m always happy to hear  
    about your plans and guide you through everything.
  </p>

</div>
</div>

      <div className="w-full flex flex-col items-center justify-center lg:w-1/2 px-4">
        <h2 className="[font-family:var(--font-cormorant)] text-center text-4xl text-[#d8b661] mb-8">
        CONTACT ME
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col justify-center gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-300 p-3 rounded-md text-lg [font-family:var(--font-cormorant)]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-300 p-3 rounded-md text-lg [font-family:var(--font-cormorant)]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={6}
          className="border border-gray-300 p-3 rounded-md text-lg [font-family:var(--font-cormorant)]"
        ></textarea>

        <input type="hidden" name="_subject" value="New message from Mauco Website" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" className="hidden" />

        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={status === "sending"}
            className="group bg-[rgb(242,236,234)] relative isolate overflow-hidden 
              inline-flex items-center justify-center
              rounded-md border border-black shadow-lg px-6 py-3
              [font-family:var(--font-playfair)] text-xl
              transition-transform duration-100
              hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 transition-colors duration-700 group-hover:text-white">
              {status === "sending" ? "Sending..." : "Send Message"}
            </span>
            <span
              aria-hidden
              className="absolute inset-0 z-0 bg-[#c6ac6f] origin-bottom scale-y-0 
                transition-transform duration-1000 ease-out group-hover:scale-y-100"
            />
          </button>
        </div>

        {status === "error" && (
          <p className="text-red-600 text-center mt-4">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
      </div>
    </section>
  );
}