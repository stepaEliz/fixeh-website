import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import AnimatedSection from "./AnimatedSection";
import { WOOD_SLAT_PATH, woodSlatPhotos } from "../data/woodSlat";

export default function WoodSlatTeaser() {
  const detail = woodSlatPhotos[0];
  return (
    <AnimatedSection className="bg-white py-16 md:py-20" aria-labelledby="wood-slat-teaser-title">
      <Container>
        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-brandLight md:grid-cols-2">
          <img src={detail.src} alt={detail.alt} width={detail.width} height={detail.height} loading="lazy" decoding="async" className="h-64 w-full object-cover md:h-full md:min-h-96" />
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brandRed">A feature worth coming home to</p>
            <h2 id="wood-slat-teaser-title" className="mt-3 text-3xl font-bold leading-tight text-brandBlue md:text-4xl">Wood Slat &amp; Feature Walls</h2>
            <p className="mt-5 leading-relaxed text-gray-600">Bring warmth and texture to a plain wall, a TV area or an overlooked corner. FixEh installs decorative and acoustic slat panels, with careful fitting around columns, outlets and trim.</p>
            <Link to={WOOD_SLAT_PATH} className="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-brandBlue underline decoration-brandBlue/35 underline-offset-4 transition hover:text-brandDark">Explore wood slat installation <ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
