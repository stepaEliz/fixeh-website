import React from "react";
import Container from "./Container";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    title: "1. Contact Us",
    text: "Send a request through the form or call directly. Share what you need help with.",
  },
  {
    title: "2. Schedule a Time",
    text: "We agree on a convenient time for you — evenings and weekends available.",
  },
  {
    title: "3. We Fix It",
    text: "Dima arrives on time, completes the work and leaves your place clean and tidy.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <AnimatedSection className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-brandBlue text-center mb-3">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Simple, transparent process from the first message to the finished job.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-brandLight rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="font-semibold text-lg text-brandDark mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default HowItWorks;
