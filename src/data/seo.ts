import { WOOD_SLAT_PATH, woodSlatPhotos } from "./woodSlat";

export const SITE_URL = "https://fixeh.ca";

export const seoByPath = {
  "/": {
    title: "FixEh Handyman & Property Support | Lower Mainland",
    description: "Handyman and property support across the Lower Mainland. One-time repairs, maintenance, assembly, painting and flexible FixEh Home Care Plans.",
    image: "/hero.jpg", imageAlt: "FixEh Handyman Services",
  },
  "/services": {
    title: "Handyman & Property Services | FixEh Lower Mainland",
    description: "Explore FixEh handyman and property services across the Lower Mainland: repairs, assembly, painting, maintenance, wood slat feature walls and Home Care Plans.",
    image: "/hero.jpg", imageAlt: "FixEh Handyman Services",
  },
  "/home-care-plans": {
    title: "Home Care Plans | FixEh Handyman & Property Support",
    description: "Monthly handyman and property support for homes, rentals and businesses. Scheduled visits, ongoing task tracking, rollover and priority urgent support.",
    image: "/home-care-hero.webp", imageAlt: "FixEh Home Care Plans",
  },
  "/contact": {
    title: "Contact FixEh | Handyman & Property Support",
    description: "Contact FixEh for handyman and property support across the Lower Mainland. Request repairs, projects, maintenance or ask about FixEh Home Care Plans.",
    image: "/hero.jpg", imageAlt: "FixEh Handyman Services",
  },
  [WOOD_SLAT_PATH]: {
    title: "Wood Slat Wall Installation Vancouver | FixEh",
    description: "Wood slat wall, feature wall and acoustic slat panel installation across Metro Vancouver and the Lower Mainland. TV walls, columns and custom fitting. Send a photo for a quote.",
    image: woodSlatPhotos[0].src, imageAlt: woodSlatPhotos[0].alt,
  },
};

export function normalizePath(pathname: string) {
  return pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
}

export function getPageSEO(pathname: string) {
  const path = normalizePath(pathname);
  return {
    ...(seoByPath[path as keyof typeof seoByPath] ?? seoByPath["/"]),
    canonicalUrl: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
  };
}

export function getPageSchema(pathname: string) {
  const path = normalizePath(pathname);
  const seo = getPageSEO(path);
  const provider = { "@id": `${SITE_URL}/#business` };
  if (path === WOOD_SLAT_PATH) {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service", "@id": `${seo.canonicalUrl}#service`,
          name: "Wood Slat & Feature Wall Installation", url: seo.canonicalUrl, description: seo.description,
          serviceType: ["Wood Slat Wall Panel Installation", "Decorative Wood Slat Panels", "Acoustic Slat Panel Installation", "Feature and Accent Wall Installation", "TV and Media Walls with Wood Slats", "Column and Small Accent Panel Installation"],
          provider,
          areaServed: [
            { "@type": "AdministrativeArea", name: "Metro Vancouver, BC" },
            { "@type": "AdministrativeArea", name: "Lower Mainland, BC" },
          ],
          image: woodSlatPhotos.map((photo) => `${SITE_URL}${photo.src}`),
        },
        {
          "@type": "WebPage", "@id": `${seo.canonicalUrl}#webpage`, url: seo.canonicalUrl,
          name: seo.title, description: seo.description, inLanguage: "en-CA",
          mainEntity: { "@id": `${seo.canonicalUrl}#service` },
          primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${seo.image}`, width: 1280, height: 960, caption: seo.imageAlt },
        },
      ],
    };
  }
  if (path === "/home-care-plans") {
    return {
      "@context": "https://schema.org", "@type": "Service", name: "FixEh Home Care Plans", url: seo.canonicalUrl,
      description: "Recurring handyman and property support with scheduled monthly visits, ongoing property task tracking, flexible rollover and priority support for urgent requests.",
      serviceType: "Recurring Handyman and Property Support", provider,
      areaServed: ["White Rock", "Surrey", "Delta", "Langley", "Vancouver", "Burnaby", "New Westminster", "Richmond", "Coquitlam"],
    };
  }
  return null;
}
