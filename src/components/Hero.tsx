// import heroImage from "../assets/hero.jpg";
// import { motion } from "framer-motion";
// import Container from "./Container";

// export default function Hero() {
//   return (
//     <section
//       className="relative mt-16 w-full min-h-[80vh] bg-cover bg-center"
//       style={{ backgroundImage: `url(${heroImage})` }}
//     >
//       <div className="absolute inset-0 bg-black/30" />

//       <Container className="flex items-start">
//         <motion.div
//           className="relative max-w-4xl text-white py-12 md:py-20"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//             Professional Handyman
//             <br />
//             Services Across Lower
//             <br />
//             Mainland
//           </h1>

//           <p className="max-w-xl text-lg md:text-xl mb-8 opacity-90">
//             Reliable home repairs, assembly, painting and maintenance.
//             From small fixes to full installations — we handle it all.
//           </p>

//           <a
//             href="#booking"
//             className="
//           inline-flex items-center justify-center
//           bg-brandBlue hover:bg-brandBlueDark 
//           text-white text-lg px-8 py-4 rounded-xl font-semibold
//           shadow-lg transition-all duration-300
//         "
//           >
//             Book a Service
//           </a>
//         </motion.div>
//       </Container>
//     </section>

//   );
// }


import heroImage from "/hero.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 25]); // мягче параллакс

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
          bg-[length:140%]   // уменьшили зум (было 160-180% из-за параллакса)
          md:bg-[length:115%] 
          bg-[position:45%_50%] // смещает фокус на центр
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
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Professional Handyman
            <br />
            Services Across
            <br />
            Lower Mainland
          </h1>

          <p className="max-w-xl text-lg md:text-xl mb-10 opacity-95">
            Reliable home repairs, assembly, mounting, painting, and maintenance.
            From small fixes to full installations — we handle it all with care.
          </p>

          <a
            href="#booking"
            className="
              inline-flex items-center justify-center
              bg-brandBlue hover:bg-brandBlueDark 
              text-white text-lg px-10 py-4 rounded-xl font-semibold
              shadow-lg transition-all duration-300
              hover:scale-[1.02] active:scale-[0.98]
            "
          >
            Book a Service
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
