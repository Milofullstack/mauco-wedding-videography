import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";
import { Great_Vibes } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
});
const greatvibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatvibes",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mauweddingvideography.com"), 

  title: {
    default: "Mauco Wedding Videography | Cinematic Wedding Films",
    template: "%s | Mauco Wedding Videography",
  },

  description:
    "Cinematic wedding videography capturing authentic emotion, modern elegance, and timeless storytelling across Mallorca and destination weddings.",

  keywords: [
    "wedding videography",
    "cinematic wedding films",
    "Mallorca weddings",
    "destination wedding videographer",
    "luxury wedding films",
    "wedding storytelling",
    "Mauco Wedding Videography",
  ],

  authors: [{ name: "Mauco Wedding Videography" }],
  creator: "Mauco Wedding Videography",
  publisher: "Mauco Wedding Videography",

  alternates: {
    canonical: "https://mauweddingvideography.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mauweddingvideography.com",
    siteName: "Mauco Wedding Videography",
    title: "Mauco Wedding Videography | Cinematic Wedding Films",
    description:
      "Cinematic wedding videography capturing authentic emotion, modern elegance, and timeless storytelling.",
    images: [
      {
        url: "https://mauweddingvideography.com/black-logo.png",
        width: 1200,
        height: 630,
        alt: "Mauco Wedding Videography",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mauco Wedding Videography | Cinematic Wedding Films",
    description:
      "Cinematic wedding videography capturing authentic emotion and modern elegance.",
    images: ["/black-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${greatvibes.variable} antialiased`}
      >
              <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoProductionCompany",
            name: "Mauco Wedding Videography",
            description:
              "Professional wedding videography and photography capturing authentic moments with modern aesthetics.",
            url: "https://mauweddingvideography.com", // 🔸 add your domain
            image: "https://mauweddingvideography.com/black-logo.png", // 🔸 optional: add your full logo URL (Cloudinary recommended)
            sameAs: [
              "https://www.instagram.com/maucoriquero?igsh=MXV4ZnZtZ3h4aXd5Zw%3D%3D&utm_source=qr/", // ✅ your Instagram
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
      />
        {children}
      </body>
    </html>
  );
}
