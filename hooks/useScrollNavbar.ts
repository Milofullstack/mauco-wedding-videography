"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollDirection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // usamos useRef para evitar renders innecesarios
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // visible al subir; oculto al bajar
      if (currentScrollY > lastScrollY.current && currentScrollY > 30) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      // actualizar el valor del último scroll
      lastScrollY.current = currentScrollY;

      // controlar si estamos arriba del todo
      setIsAtTop(currentScrollY <= 10);
    };

    // inicializamos el estado
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterTop = () => setShowNavbar(true);

  return { isOpen, setIsOpen, showNavbar, handleMouseEnterTop, isAtTop };
}