"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollDirection } from "@/hooks/useScrollNavbar";

export default function Navbar() {
  const { isOpen, setIsOpen, showNavbar, handleMouseEnterTop, isAtTop } =
    useScrollDirection();

  const isTransparent = isAtTop && !isOpen;
  const showLightLogo = isAtTop && !isOpen;

  const linkColors = isOpen
    ? "text-black hover:text-gray-600"
    : isTransparent
    ? "text-white hover:text-gray-200"
    : "text-black hover:text-gray-600";

  // 🔗 Lista de enlaces (internos + externos)
  const links = [
    { href: "/", label: "Inicio", external: false },
    { href: "#about", label: "About me", external: false },
    { href: "#view", label: "View", external: false },
    { href: "#contact", label: "Contact", external: false },
    {
      href: "https://www.instagram.com/mauweddingvideography/",
      label: "Media",
      external: true,
    },
  ];

  return (
    <div>
      {/* Área sensible superior */}
      <div
        className="fixed top-0 left-0 w-full h-[30px] z-60"
        onMouseEnter={handleMouseEnterTop}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-1000
          ${showNavbar ? "translate-y-0" : "-translate-y-full"} hover:translate-y-0
          ${isTransparent ? "bg-transparent" : "bg-white/90 backdrop-blur-sm shadow-sm"}
        `}
      >
        <nav
          className={`flex items-center justify-between gap-6 border-b
            ${isTransparent ? "border-transparent" : "border-gray-300"}
            transition-colors`}
        >
          {/* === Logo === */}
          <div className="flex items-center pl-6 md:pl-8 lg:pl-16">
            <Link href="/" className="block">
              <Image
                src={showLightLogo ? "/images/logoW.png" : "/images/LogoB.png"}
                alt="Mauco Riqueiro"
                width={105}
                height={85}
                className="block cursor-pointer min-w-[125px]"
              />
            </Link>
          </div>

          {/* === Menú === */}
          <div className="py-4 mx-8 md:mx-16 lg:mx-24">
            {/* Botón hamburguesa (solo móvil) */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              aria-expanded={isOpen}
              aria-controls="main-menu"
            >
              <svg
                className={`w-6 h-6 md:w-8 md:h-8 ${
                  isTransparent && !isOpen ? "text-white" : "text-black"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Lista de enlaces */}
            <ul
              id="main-menu"
              className={`
                flex flex-col items-center md:flex-row [font-family:var(--font-playfair)] font-medium text-lg md:items-center
                gap-10 md:gap-8 lg:gap-10 xl:gap-20
                absolute md:static top-full left-0 w-full md:w-auto
                ${isOpen ? "block" : "hidden md:flex"}
                ${isOpen ? "bg-white" : "bg-transparent"}
                px-10 py-10 md:p-0
                transition-all duration-500 ease-in-out
              `}
            >
              {links.map(({ href, label, external }) => (
                <li
                  key={href}
                  className="transition-transform duration-200 hover:scale-105"
                >
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkColors} transition-colors`}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className={`${linkColors} transition-colors`}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}