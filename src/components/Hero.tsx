import heroImage from "/hero.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";
import { Link } from "react-router-dom";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 25]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] overflow-hidden mt-16"
    >
      {/* Background Image */}
      <motion.div
        style={{
          y,
          backgroundImage: `url(${heroImage})`,
        }}
        className="
          absolute inset-0 
          bg-no-repeat 
          bg-cover 
          bg-[length:140%] 
          md:bg-[length:115%] 
          bg-[position:45%_50%]
        "
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

{/* Content */}
<Container>
  <motion.div
    className="relative max-w-3xl text-white py-24 md:py-32"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
      FixEh Handyman Services
    </p>

    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
      Handyman & Property
      <br />
      Support Across the
      <br />
      Lower Mainland
    </h1>

    <p className="max-w-2xl text-lg md:text-xl mb-10 opacity-95 leading-relaxed">
      From one-time repairs to ongoing Home Care Plans, FixEh helps maintain,
      manage and take care of your home, rental property or business.
    </p>

    <div className="flex flex-wrap gap-4">
      <a
        href="#booking"
        className="
          inline-flex items-center justify-center
          bg-brandBlue hover:bg-brandBlueDark
          text-white text-lg px-8 py-4 rounded-xl font-semibold
          shadow-lg transition-all duration-300
          hover:-translate-y-0.5 active:scale-[0.98]
        "
      >
        Book a Service
      </a>

<Link
  to="/home-care-plans"
  className="
    inline-flex items-center justify-center
    border border-white/60 bg-white/10 backdrop-blur-sm
    hover:bg-white hover:text-brandDark
    text-white text-lg px-8 py-4 rounded-xl font-semibold
    shadow-lg transition-all duration-300
    hover:-translate-y-0.5
  "
>
  Explore Home Care Plans
</Link>
    </div>
  </motion.div>
</Container>
    </section>
  );
}
