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

  // 1. Si estamos arriba → navbar visible siempre
  if (currentScrollY < 60) {
    setShowNavbar(true);
    setIsAtTop(true);
  } else {
    setIsAtTop(false);
  }

  // 2. Detectar dirección del scroll
  const isScrollingDown = currentScrollY > lastScrollY.current;
  const isScrollingUp = currentScrollY < lastScrollY.current;

  // 3. Si baja → ocultar
  if (isScrollingDown && currentScrollY > 20) {
    setShowNavbar(false);
  }

  // 4. Si sube → mostrar (sin micro-jumps)
  if (isScrollingUp && lastScrollY.current - currentScrollY > 6) {
    setShowNavbar(true);
  }

  lastScrollY.current = currentScrollY;
};

    // inicializamos el estado
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterTop = () => setShowNavbar(true);

  return { isOpen, setIsOpen, showNavbar, handleMouseEnterTop, isAtTop };
}