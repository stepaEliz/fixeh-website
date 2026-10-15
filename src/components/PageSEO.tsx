import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageSEO, getPageSchema, SITE_URL } from "../data/seo";

export default function PageSEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const seo = getPageSEO(pathname);
    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", seo.canonicalUrl);
    setMeta("property", "og:image", `${SITE_URL}${seo.image}`);
    setMeta("property", "og:image:alt", seo.imageAlt);
    setMeta("property", "og:locale", "en_CA");
    setMeta("property", "og:site_name", "FixEh Handyman Services");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", `${SITE_URL}${seo.image}`);
    setMeta("name", "twitter:image:alt", seo.imageAlt);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = seo.canonicalUrl;

    document.querySelectorAll('script[data-page-schema="true"]').forEach((script) => script.remove());
    const schema = getPageSchema(pathname);
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.pageSchema = "true";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [pathname]);
  return null;
}

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}
