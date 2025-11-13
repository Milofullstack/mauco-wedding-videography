import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // puedes añadir "500" o "900" si los usarás
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mauco Riqueiro",
  description: "Wedding Videographer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      
      <body className={`${playfair.variable} ${cormorant.variable} antialiased`}>
        {children}</body>
    </html>
  );
}