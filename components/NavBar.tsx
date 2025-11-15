"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollDirection } from "@/hooks/useScrollNavbar";
import { useEffect, useState } from "react";

export default function Navbar() {
  // Hook original (solo se usará en desktop)
  const { isOpen, setIsOpen, showNavbar, handleMouseEnterTop, isAtTop } =
    useScrollDirection();

  // Detectar si es móvil
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Siempre transparente en móvil
  const mobileBackground = isOpen ? "bg-white" : "bg-transparent";


  // En desktop, el color de fondo original
  const desktopBackground = isAtTop && !isOpen
    ? "bg-transparent"
    : "bg-white/90 backdrop-blur-sm shadow-sm";

  // Logo siempre blanco en móvil
  const logoSrc =  isMobile
    ? (isAtTop && !isOpen ? "/images/logo-w.png" : "/images/logo-b.png")
    : (isAtTop && !isOpen ? "/images/logo-w.png" : "/images/logo-b.png");

  // Hamburguesa siempre blanca en móvil
  const burgerColor =   isMobile
    ? (isAtTop && !isOpen ? "text-white" : "text-black")
    : (isAtTop && !isOpen ? "text-white" : "text-black");

  // Links en navbar abierta en móvil → negros sobre fondo blanco
  const linkColors = isOpen
    ? "text-black"
    : isMobile
    ? "text-white"
    : isAtTop && !isOpen
    ? "text-white"
    : "text-black";

  // Lista de enlaces
  const links = [
    { href: "/", label: "Inicio", external: false },
    { href: "#about", label: "About me", external: false },
    { href: "#view", label: "View", external: false },
    { href: "#contact", label: "Contact", external: false },
    {
      href: "https://www.instagram.com/maucoriquero?igsh=MXV4ZnZtZ3h4aXd5Zw%3D%3D&utm_source=qr",
      label: "Media",
      external: true,
    },
  ];

  return (
    <div>
      {/* Área sensible superior SOLO en desktop */}
      {!isMobile && (
        <div
          className="fixed top-0 left-0 w-full h-[30px] z-60"
          onMouseEnter={handleMouseEnterTop}
        />
      )}

      <header
        className={`
          fixed top-0 left-0 w-full z-50
          ${isMobile ? "" : "transition-transform duration-1000"}
          ${isMobile ? "" : showNavbar ? "translate-y-0" : "-translate-y-full"} 
          hover:translate-y-0
          ${isMobile ? mobileBackground : desktopBackground}
        `}
      >
        <nav
          className={`flex items-center justify-between gap-6 border-b
            ${isMobile ? "border-transparent" : isAtTop ? "border-transparent" : "border-gray-300"}
            transition-colors
            px-4 py-2
          `}
        >
          {/* === Logo === */}
          <Link href="/" className="block">
            <Image
              src={logoSrc}
              alt="Mauco Riquero"
              width={isMobile ? 100 : 125}
              height={isMobile ? 60 : 85}
              className="cursor-pointer md:ml-10"
            />
          </Link>

          {/* === Botón Hamburguesa === */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            <svg
              className={`w-7 h-7 ${burgerColor}`}
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

          {/* === Menú (drawer móvil + modo desktop) === */}
          <ul
            className={`[font-family:var(--font-cormorant)] font-normal text-2xl md:text-xl xl:text-2xl
              flex flex-col md:flex-row items-center gap-10 md:gap-8 lg:gap-10 xl:gap-20
              md:static absolute top-full left-0 w-full md:w-auto
              ${isOpen ? "block" : "hidden md:flex"}
              ${isOpen ? "bg-white" : "bg-transparent"}
              px-10 py-10 md:p-10
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
                    className={`${linkColors}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className={`${linkColors}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}