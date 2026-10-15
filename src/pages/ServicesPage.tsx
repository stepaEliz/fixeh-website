import React from "react";
import { Link } from "react-router-dom";
import {
  HammerIcon,
  HomeIcon,
  PaintbrushIcon,
  WrenchIcon,
  ArrowRight,
} from "lucide-react";

import Container from "../components/Container";
import AnimatedSection from "../components/AnimatedSection";
import { WOOD_SLAT_PATH, woodSlatPhotos } from "../data/woodSlat";

const services = [
  {
    title: "Repairs",
    icon: WrenchIcon,
    description:
      "Practical repairs and adjustments for the everyday issues that come up around your home.",
    items: [
      "Interior & exterior door repairs",
      "Hinges, handles and hardware adjustments",
      "Drywall patching & minor wall repairs",
      "Caulking and sealing",
      "Loose fixtures, rails and brackets",
      "Small & medium home repairs",
    ],
  },
  {
    title: "Assembly",
    icon: HammerIcon,
    description:
      "Careful assembly and installation for furniture, storage and household items.",
    items: [
      "IKEA & other major furniture brands",
      "Cabinets, dressers and wardrobes",
      "Shelves and storage units",
      "Beds, bookcases and TV stands",
      "Disassembly & reassembly",
      "Level and secure installation",
    ],
  },
  {
    title: "Painting",
    icon: PaintbrushIcon,
    description:
      "Painting and touch-up work for walls, trim and smaller improvement projects.",
    items: [
      "Wall touch-ups",
      "Room painting",
      "Baseboards, trim and doors",
      "Preparation and minor patching",
      "Refreshes without a full renovation",
      "Clean preparation and careful finishing",
    ],
  },
  {
    title: "Maintenance",
    icon: HomeIcon,
    description:
      "Ongoing upkeep and small improvements to help keep your property working properly.",
    items: [
      "Regular home upkeep",
      "Tightening and adjustments",
      "Minor carpentry",
      "Door and hardware maintenance",
      "Fixture replacements",
      "Seasonal property checks",
    ],
  },
];

const ServicesPage: React.FC = () => {
  const slatPhoto = woodSlatPhotos[0];

  return (
    <div className="mt-16 bg-white">
      {/* INTRO */}
      <AnimatedSection className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brandRed">
              FixEh Handyman Services
            </p>

            <h1 className="text-4xl font-bold text-brandDark md:text-5xl">
              Handyman & Property Services
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              From everyday repairs and furniture assembly to painting,
              property maintenance and specialized projects, FixEh provides
              practical support for homes, rental properties and small
              businesses across the Lower Mainland.
            </p>
          </div>
        </Container>
      </AnimatedSection>

      {/* EVERYDAY HANDYMAN SERVICES */}
      <AnimatedSection className="bg-brandLight py-16 md:py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 font-semibold text-brandRed">
              Everyday Handyman Services
            </p>

            <h2 className="text-3xl font-bold text-brandBlue md:text-4xl">
              Help With the Jobs Around Your Property
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Book FixEh for a one-time project or a list of smaller jobs that
              need attention.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="
                    rounded-2xl border border-gray-200 bg-white p-7
                    shadow-sm transition duration-300
                    hover:-translate-y-1 hover:shadow-lg
                    md:p-8
                  "
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brandBlue/10 text-brandBlue">
                    <Icon size={24} strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-semibold text-brandDark">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-gray-700"
                      >
                        <span className="mt-0.5 font-bold text-brandBlue">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </AnimatedSection>

      {/* SPECIALIZED SUPPORT */}
      <AnimatedSection className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 font-semibold text-brandRed">
              Specialized & Ongoing Support
            </p>

            <h2 className="text-3xl font-bold text-brandBlue md:text-4xl">
              More Ways FixEh Can Help
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Explore dedicated services for feature wall installations and
              ongoing property support.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* WOOD SLAT */}
            <article className="overflow-hidden rounded-3xl border border-gray-200 bg-brandLight shadow-sm">
              <img
                src={slatPhoto.src}
                alt={slatPhoto.alt}
                width={slatPhoto.width}
                height={slatPhoto.height}
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover"
              />

              <div className="p-7 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brandRed">
                  Specialized Installation
                </p>

                <h3 className="mt-3 text-2xl font-bold text-brandBlue">
                  Wood Slat & Feature Walls
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  Decorative and acoustic slat panel installation for feature
                  walls, TV areas, columns and smaller accent spaces, with
                  careful fitting around corners, outlets and trim.
                </p>

                <Link
                  to={WOOD_SLAT_PATH}
                  className="
                    mt-6 inline-flex min-h-11 items-center gap-2
                    font-semibold text-brandBlue
                    underline decoration-brandBlue/35 underline-offset-4
                    transition hover:text-brandDark
                  "
                >
                  Explore Wood Slat Installation
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>

            {/* HOME CARE */}
            <article className="overflow-hidden rounded-3xl border border-gray-200 bg-brandLight shadow-sm">
              <div className="flex h-full flex-col">
                <div className="bg-brandBlue p-7 text-white md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
                    FixEh Home Care Plans
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Your Home & Property Assistant
                  </h3>

                  <p className="mt-4 leading-relaxed text-white/90">
                    Reserve dedicated FixEh time each month for maintenance,
                    repairs, projects and the practical tasks that keep your
                    property running smoothly.
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="font-bold text-brandBlue">✓</span>
                      Dedicated recurring support
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-brandBlue">✓</span>
                      Ongoing property file & task list
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-brandBlue">✓</span>
                      Priority support for urgent requests
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-brandBlue">✓</span>
                      Flexible monthly plans
                    </li>
                  </ul>

                  <Link
                    to="/home-care-plans"
                    className="
                      mt-6 inline-flex min-h-11 items-center gap-2
                      self-start font-semibold text-brandBlue
                      underline decoration-brandBlue/35 underline-offset-4
                      transition hover:text-brandDark
                    "
                  >
                    Explore Home Care Plans
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </AnimatedSection>

      {/* FINAL CTA */}
      <AnimatedSection className="bg-brandBlue py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
              Send us a few details or photos of what you need help with and
              we'll let you know the best way to get started.
            </p>

            <Link
              to="/contact"
              className="
                mt-7 inline-flex items-center justify-center
                rounded-xl bg-brandRed px-8 py-4
                font-semibold text-white shadow-md
                transition duration-300
                hover:-translate-y-0.5 hover:bg-brandRedDark
              "
            >
              Contact FixEh
            </Link>
          </div>
        </Container>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;