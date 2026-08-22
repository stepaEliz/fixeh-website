import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://fixeh.ca";

const seoByPath = {
  "/": {
    title: "FixEh Handyman & Property Support | Lower Mainland",
    description:
      "Handyman and property support across the Lower Mainland. One-time repairs, maintenance, assembly, painting and flexible FixEh Home Care Plans.",
    image: "/hero.jpg",
  },

  "/services": {
    title: "Handyman & Property Services | FixEh Lower Mainland",
    description:
      "Explore FixEh handyman and property services across the Lower Mainland, including repairs, assembly, mounting, painting, maintenance and project support.",
    image: "/hero.jpg",
  },

  "/home-care-plans": {
    title: "Home Care Plans | FixEh Handyman & Property Support",
    description:
      "Monthly handyman and property support for homes, rentals and businesses. Scheduled visits, ongoing task tracking, rollover and priority urgent support.",
    image: "/home-care-hero.png",
  },

  "/contact": {
    title: "Contact FixEh | Handyman & Property Support",
    description:
      "Contact FixEh for handyman and property support across the Lower Mainland. Request repairs, projects, maintenance or ask about FixEh Home Care Plans.",
    image: "/hero.jpg",
  },
} as const;

export default function PageSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";

    const seo =
      seoByPath[normalizedPath as keyof typeof seoByPath] ?? seoByPath["/"];

    const canonicalUrl =
      normalizedPath === "/"
        ? `${SITE_URL}/`
        : `${SITE_URL}${normalizedPath}`;

    const imageUrl = `${SITE_URL}${seo.image}`;

    // Title
    document.title = seo.title;

    // Description
    setMeta("name", "description", seo.description);

    // Open Graph
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:site_name", "FixEh Handyman Services");

    // Twitter / social
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", imageUrl);

    // Canonical
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    // Home Care Plans structured data
    document
      .querySelector('script[data-page-schema="true"]')
      ?.remove();

    if (normalizedPath === "/home-care-plans") {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "FixEh Home Care Plans",
        url: `${SITE_URL}/home-care-plans`,
        description:
          "Recurring handyman and property support with scheduled monthly visits, ongoing property task tracking, flexible rollover and priority support for urgent requests.",
        serviceType: "Recurring Handyman and Property Support",
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "FixEh Handyman Services",
          url: `${SITE_URL}/`,
          telephone: "+1-778-667-0667",
          email: "fixeh.handyman@gmail.com",
        },
        areaServed: [
          "White Rock",
          "Surrey",
          "Langley",
          "Vancouver",
          "Burnaby",
          "New Westminster",
          "Richmond",
          "Coquitlam",
        ],
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.pageSchema = "true";
      script.textContent = JSON.stringify(schema);

      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}

function setMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}