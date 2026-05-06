import React from "react";
import Container from "../components/Container";

const services = [
  {
    title: "Repairs",
    items: [
      "Interior & exterior door repairs",
      "Adjusting hinges, handles and hardware",
      "Drywall patching & minor wall repairs",
      "Caulking and sealing to stop drafts or leaks",
      "Fixing loose fixtures, rails and brackets",
      "Quick, reliable small & medium home repairs"
    ],
  },
  {
    title: "Assembly",
    items: [
      "IKEA & all major furniture brands",
      "Cabinets, dressers, wardrobes, shelves",
      "TV stands, beds, bookcases, storage units",
      "Secure, level and clean installation",
      "Disassembly & reassembly upon request"
    ],
  },
  {
    title: "Painting",
    items: [
      "Wall touch-ups & small room painting",
      "Baseboards, trims and doors",
      "Perfect for refreshing spaces without renovation",
      "Smooth, clean finish with no paint odours left behind"
    ],
  },
  {
    title: "Maintenance",
    items: [
      "Regular home upkeep & small improvements",
      "Lubrication, tightening, adjustments",
      "Fixing squeaky doors & minor carpentry",
      "Fixture replacements, seasonal checks",
      "Perfect for ongoing peace of mind"
    ],
  },
  {
    title: "Recurring Maintenance",
    items: [
      "Monthly or seasonal handyman visits",
      "Small repairs, adjustments and home upkeep",
      "Help with ongoing household tasks",
      "Great for busy homeowners, landlords and seniors",
      "Custom plan based on your home and needs"
    ],
    added: "Recurring maintenance plans are available upon request. Contact us for a custom quote."
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="py-20 mt-20 bg-white">
      <Container>
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-brandDark mb-6">
          Services
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mb-16">
          FixEh Handyman Services provides professional, reliable home repair
          and improvement solutions. Below you can explore the areas we
          specialize in — always completed with clean workmanship,
          transparent communication and attention to detail.
        </p>

        {/* Service Cards */}
        <div className="space-y-12">
          {services.map((service) => (
            <div key={service.title} className="border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition">

              {/* Title Row */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-brandDark">{service.title}</h2>
              </div>

              {/* List of items */}
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-brandBlue text-xl leading-6">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Added */}
              <p className="mt-4 text-sm text-gray-500">
                {service?.added}
              </p>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="text-brandBlue hover:text-brandRed font-medium text-lg underline underline-offset-4 transition"
          >
            Need help with a project? Contact us
          </a>
        </div>

      </Container>
    </div>
  );
};

export default ServicesPage;
