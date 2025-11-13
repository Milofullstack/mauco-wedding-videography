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
      className="w-full min-h-[80dvh] bg-[#f9f4f2] flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="[font-family:var(--font-cormorant)] text-4xl text-[#d8b661] mb-8">
        CONTACT ME
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-6"
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
    </section>
  );
}