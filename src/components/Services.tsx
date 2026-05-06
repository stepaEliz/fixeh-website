import React from "react";
import Container from "./Container";
import AnimatedSection from "./AnimatedSection";
import { HammerIcon, HomeIcon, PaintbrushIcon, WrenchIcon } from "lucide-react";

const services = [
  {
    title: "Repairs",
    icon: WrenchIcon,
    description:
      "Quick, reliable fixes for common home issues — doors, walls, hardware, leaks and more.",
  },
  {
    title: "Assembly",
    icon: HammerIcon,
    description:
      "Professional assembly for furniture, cabinets, shelves and household installations.",
  },
  {
    title: "Painting",
    icon: PaintbrushIcon,
    description:
      "Touch-ups, wall painting and refinishing to refresh and modernize your living space.",
  },
  {
    title: "Maintenance",
    icon: HomeIcon,
    description:
      "Regular home upkeep, adjustments and improvements to keep everything working smoothly.",
  },
];

const Services: React.FC = () => {
  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-brandBlue">
            Our Services
          </h2>

          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Professional handyman work across the Lower Mainland — reliable,
            skilled, and always here to help with your home projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                bg-brandLight/50 rounded-2xl p-8 
                shadow-sm border border-gray-200
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
                flex flex-col items-start
                h-full
              "
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brandBlue/10 text-brandBlue">
                <service.icon size={24} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-brandDark mb-3">
                {service.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Services;
