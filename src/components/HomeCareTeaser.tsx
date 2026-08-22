import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import AnimatedSection from "./AnimatedSection";

const HomeCareTeaser: React.FC = () => {
  return (
    <AnimatedSection className="relative py-16 md:py-20 bg-brandLight overflow-hidden">
  {/* Brand tool pattern */}
  <div
    className="absolute inset-0 opacity-[0.035] bg-repeat pointer-events-none"
    style={{
      backgroundImage: "url('/background-pattern.png')",
      backgroundSize: "230px",
    }}
  />

  <Container className="relative z-10">
        <div className="rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] items-stretch">
            
            {/* Text */}
            <div className="p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brandRed mb-3">
                FixEh Home Care Plans
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-brandBlue leading-tight">
                More Than a Handyman.
                <span className="block text-brandDark mt-1">
                  Your Home & Property Assistant.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-gray-600 max-w-2xl">
                Reserve dedicated FixEh time every month for repairs,
                maintenance, projects, property checks, pickups, deliveries
                and the everyday tasks that keep your home or business running
                smoothly.
              </p>

              <p className="mt-4 leading-relaxed text-gray-600 max-w-2xl">
                We get to know your property, keep track of ongoing tasks and
                give you one reliable person to call when something needs
                attention.
              </p>

              <div className="mt-7">
                <Link
                  to="/home-care-plans"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl bg-brandBlue px-7 py-3.5
                    font-semibold text-white
                    transition duration-300
                    hover:bg-brandBlueDark hover:-translate-y-0.5
                  "
                >
                  Explore Home Care Plans
                </Link>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-brandBlue p-8 md:p-10 h-full flex items-center">
              <ul className="space-y-5 text-white">
                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  <span>Dedicated monthly support</span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  <span>Your ongoing property file & task list</span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  <span>Send new tasks and photos as they come up</span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  <span>Priority support for urgent requests</span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  <span>Roll over your hours or gift your visit</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default HomeCareTeaser;