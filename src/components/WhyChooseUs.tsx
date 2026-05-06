import { HandshakeIcon, ShieldCheckIcon, ToolCaseIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Container from "./Container";

export default function WhyChoose() {
  return (
    <AnimatedSection className="relative py-24 bg-brandLight overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-repeat"
        style={{
          backgroundImage: "url('/background-pattern.png')",
          backgroundSize: "230px",
        }}
      />

      <Container>
        {/* Title */}
        <div className="relative text-center mb-16">
          <h2 className="text-4xl font-bold text-brandBlue mb-4">
            Why Choose FixEh?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted handyman services providing reliable, transparent, and
            professional work across the Lower Mainland.
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
              title: "Repairs, Assembly & Painting",
              desc: "From mounting and furniture assembly to painting and home repairs.",
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
                bg-white p-8 rounded-2xl border shadow-sm 
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
