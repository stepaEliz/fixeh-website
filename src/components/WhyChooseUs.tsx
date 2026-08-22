import { HandshakeIcon, ShieldCheckIcon, ToolCaseIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Container from "./Container";

export default function WhyChoose() {
  return (
  <AnimatedSection className="py-24 bg-white">

      <Container>
        {/* Title */}
        <div className="relative text-center mb-16">
          <h2 className="text-4xl font-bold text-brandBlue mb-4">
            Why Choose FixEh?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
Reliable handyman and property support with professional workmanship,
  clear communication, and ongoing care across the Lower Mainland.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          {[
            {
              icon: ShieldCheckIcon,
              title: "Reliable & Professional",
              desc: "On-time, respectful, and skilled handyman ensuring every job is done right.",
            },
            {
              icon: ToolCaseIcon,
              title: "Projects & Property Support",
  desc: "From everyday repairs and installations to maintenance, projects and ongoing property support.",
            },
            {
              icon: HandshakeIcon,
              title: "Friendly & Transparent",
              desc: "Clear pricing, honest communication, and high-quality service.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
  bg-brandLight p-8 rounded-2xl border border-gray-200 shadow-sm
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300
                text-center
              "
            >
              <div className="mb-5 flex justify-center">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brandBlue/10 text-brandBlue">
                  <item.icon size={24} strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-brandDark mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
