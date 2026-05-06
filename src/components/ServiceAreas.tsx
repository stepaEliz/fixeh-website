import React from "react";
import Container from "./Container";
import AnimatedSection from "./AnimatedSection";

const areas = [
  "White Rock",
  "Surrey",
  "Langley",
  "Vancouver",
  "Burnaby",
  "New Westminster",
  "Richmond",
  "Coquitlam",
];

const ServiceAreas: React.FC = () => {
  return (
    <AnimatedSection className="py-16 bg-brandLight">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-brandBlue text-center mb-3">
          Service Areas
        </h2>
        <p className="text-center text-gray-600 mb-8">
          FixEh Handyman Services is available across the Lower Mainland.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm md:text-base text-brandDark shadow-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default ServiceAreas;
