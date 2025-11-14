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
  // metadataBase: new URL("https://"), // 🔸 <-- replace with your final domain, e.g. "https://mauco.vercel.app"
  title: {
    default: "Mauco Wedding Videography | Wedding Films & Photography",
    template: "%s | Mauco Wedding Videography",
  // },
  // description:
  //   "Professional wedding videography and photography capturing authentic moments with modern aesthetics.",
  // keywords: [
  //   "wedding videography",
  //   "wedding photography",
  //   "cinematic wedding films",
  //   "Mallorca weddings",
  //   "destination weddings",
  //   "Mauco Wedding Videography",
  // ],
  // authors: [{ name: "Mauco Wedding Videography" }],
  // creator: "Mauco Wedding Videography",
  // publisher: "Mauco Wedding Videography",
  // alternates: {
  //   canonical: "https://", // 🔸 <-- add your URL here once deployed
  //   languages: {
  //     en: "https://", // 🔸 main English version
  //     es: "https://", // 🔸 optional Spanish version (future)
  //   },
  // },
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: "https://", // 🔸 your final domain again here
  //   siteName: "Mauco Wedding Videography",
  //   title: "Mauco Wedding Videography | Wedding Films & Photography",
  //   description:
  //     "Professional wedding videography and photography capturing authentic moments with modern aesthetics.",
  //   images: [
  //     {
  //       url: "/logo.png", // 🔸 ensure /public/logo.png exists
  //       width: 1200,
  //       height: 630,
  //       alt: "Mauco Wedding Videography Logo",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Mauco Wedding Videography | Wedding Films & Photography",
  //   description:
  //     "Professional wedding videography and photography capturing authentic moments with modern aesthetics.",
  //   images: ["/logo.png"],
  // 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoProductionCompany",
            name: "Mauco Wedding Videography",
            description:
              "Professional wedding videography and photography capturing authentic moments with modern aesthetics.",
            url: "https://", // 🔸 add your domain
            image: "https://", // 🔸 optional: add your full logo URL (Cloudinary recommended)
            sameAs: [
              "https://www.instagram.com/maucoweddings/", // ✅ your Instagram
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mallorca",
              addressCountry: "Spain",
            },
            areaServed: ["Spain", "Europe"],
            inLanguage: ["en", "es"], // 🔸 languages supported
          }),
        }}
      /> */}
      <body
        className={`${playfair.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
