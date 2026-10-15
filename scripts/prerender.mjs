import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer } from "vite";

// Render the specialist landing page during the normal static build, so its
// content and social/SEO metadata are present before any browser runs JS.
const vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });

try {
  const { render, getPageSEO, getPageSchema, SITE_URL, WOOD_SLAT_PATH } = await vite.ssrLoadModule("/src/entry-server.tsx");
  const seo = getPageSEO(WOOD_SLAT_PATH);
  let html = await readFile(resolve("dist/index.html"), "utf8");
  const escape = (text) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const addHead = (tag) => { html = html.replace("</head>", `${tag}\n</head>`); };

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(seo.title)}</title>`);
  function setMeta(attribute, name, content) {
    const tag = `<meta ${attribute}="${name}" content="${escape(content)}" />`;
    const existing = new RegExp(`<meta\\s+${attribute}=["']${name}["'][^>]*>`, "i");
    if (existing.test(html)) html = html.replace(existing, tag);
    else addHead(tag);
  }
  setMeta("name", "description", seo.description);
  for (const [name, content] of Object.entries({
    "og:title": seo.title, "og:description": seo.description, "og:url": seo.canonicalUrl,
    "og:type": "website", "og:site_name": "FixEh Handyman Services", "og:locale": "en_CA",
    "og:image": `${SITE_URL}${seo.image}`, "og:image:alt": seo.imageAlt,
  })) setMeta("property", name, content);
  for (const [name, content] of Object.entries({
    "twitter:card": "summary_large_image", "twitter:title": seo.title,
    "twitter:description": seo.description, "twitter:image": `${SITE_URL}${seo.image}`,
    "twitter:image:alt": seo.imageAlt,
  })) setMeta("name", name, content);
  addHead(`<link rel="canonical" href="${seo.canonicalUrl}" />`);
  const schema = JSON.stringify(getPageSchema(WOOD_SLAT_PATH)).replaceAll("<", "\\u003c");
  addHead(`<script type="application/ld+json" data-page-schema="true">${schema}</script>`);
  html = html.replace('<div id="root"></div>', () => `<div id="root">${render(WOOD_SLAT_PATH)}</div>`);
  if (!html.includes('id="slat-page-title"')) throw new Error("Landing page prerender produced no page content.");
  const directory = resolve(`dist${WOOD_SLAT_PATH}`);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), html);
  console.log(`Prerendered ${WOOD_SLAT_PATH} with content, metadata and structured data.`);
} finally {
  await vite.close();
}
