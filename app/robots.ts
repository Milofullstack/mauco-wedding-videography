import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        
          "/private/",    
          "/admin/",    
          "/server/",     
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Video",
        allow: "/",
      },
    ],

    sitemap: "https://mauweddingvideography.com/sitemap.xml",

    host: "https://mauweddingvideography.com",
  };
}

