import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";

const plans = [
  {
    name: "Home Care 4",
    price: "$299",
    description:
      "Dedicated monthly support for regular home, property and everyday tasks.",
    details: [
      "1 visit per month",
      "Up to 4 hours of dedicated support",
      "Basic consumables included",
      "Ongoing property file & task list",
      "One-month hour rollover",
      "Gift your scheduled visit",
      "Priority support for urgent requests",
    ],
  },
  {
    name: "Home Care 8",
    price: "$549",
    description:
      "A full dedicated day each month for a longer list of property, project and maintenance needs.",
    details: [
      "1 full-day visit per month",
      "Up to 8 hours of dedicated support",
      "Basic consumables included",
      "Ongoing property file & task list",
      "One-month hour rollover",
      "Gift your scheduled visit",
      "5% off additional handyman labour",
      "Priority support for urgent requests",
    ],
    featured: true,
  },
  {
    name: "Home Care Flex",
    price: "$599",
    description:
      "Two scheduled visits for homes, properties or businesses that need support throughout the month.",
    details: [
      "2 visits per month",
      "Up to 4 hours per visit",
      "Basic consumables included",
      "Ongoing property file & task list",
      "One-month hour rollover",
      "Gift a scheduled visit",
      "10% off additional handyman labour",
      "Priority support for urgent requests",
    ],
  },
];

const includedServices = [
  "General home repairs & maintenance",
  "Furniture assembly & mounting",
  "Painting, drywall & finishing",
  "Caulking, sealing & hardware",
  "Yard & seasonal property work",
  "Small renovation & project support",
  "Property checks & preventive maintenance",
  "Material pickups & supply runs",
  "Moving & furniture assistance",
  "Pickup and delivery support",
  "Rental property support",
  "Office & small business support",
];

const perks = [
  {
    title: "Reserved Time for Your Property",
    text: "Your dedicated FixEh time is scheduled in advance, so regular maintenance, projects and practical tasks already have a place on the calendar.",
  },
  {
    title: "Priority Support When It Matters",
    text: "Home Care clients receive priority when an urgent handyman or property issue comes up. Same-day service is offered whenever availability allows.",
  },
  {
    title: "Your Ongoing Property File",
    text: "We keep track of current tasks, photos, completed work, future projects and things to watch around your property.",
  },
  {
    title: "Gift Your Visit",
    text: "Don't need your scheduled visit this month? You can transfer it to a friend or family member within the FixEh service area.",
  },
  {
    title: "One-Month Rollover",
    text: "Unused plan hours can roll over for one billing cycle, giving you flexibility when you don't need all of your scheduled time.",
  },
  {
    title: "Member Pricing on Extra Work",
    text: "Selected Home Care Plans include preferred pricing when you need additional handyman labour beyond your scheduled monthly hours.",
  },
];

const faqs = [
  {
    question: "Are materials included in the monthly price?",
    answer:
      "Basic consumables such as common screws, anchors, fasteners, tape and similar small items are included. Larger materials, fixtures, paint, lumber, replacement parts and specialty supplies are billed separately.",
  },
  {
    question: "What happens if I don't need my visit this month?",
    answer:
      "You can either roll your unused plan hours into the next billing cycle or gift your scheduled visit to a friend or family member within our service area. Unused hours can roll over for one billing cycle only.",
  },
  {
    question: "Can I add new tasks between visits?",
    answer:
      "Yes. Send us photos or messages whenever you notice a new repair, project or property issue. We'll keep it on your ongoing task list for a future Home Care visit.",
  },
  {
    question: "Can Home Care time be used for yard work or renovation projects?",
    answer:
      "Yes. Home Care time can be used for many practical property tasks, including seasonal yard work, maintenance and small renovation or project support. Larger or specialized projects may require a separate quote.",
  },
  {
    question: "Can you help with pickups, deliveries or moving items?",
    answer:
      "Yes, depending on the task. Pickup, delivery, furniture transport, material runs and vehicle rental arrangements may be available by request. Rental, fuel, disposal and other third-party costs are charged separately.",
  },
  {
    question: "Are Home Care Plans only for homeowners?",
    answer:
      "No. Home Care Plans can also support rental properties, offices and small businesses that need reliable recurring hands-on help.",
  },
  {
    question: "Does priority support guarantee same-day service?",
    answer:
      "Home Care clients receive priority for urgent requests. Same-day service is offered whenever availability allows, but cannot always be guaranteed.",
  },
  {
    question: "Are evening appointments available?",
    answer:
      "After-hours appointments may be available when scheduling allows. Additional after-hours charges may apply.",
  },
];

export default function HomeCarePlans() {

  useEffect(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "FixEh Home Care Plans",
    url: "https://fixeh.ca/home-care-plans",
    description:
      "Recurring handyman home maintenance plans with scheduled monthly visits, priority support, hour rollover and ongoing task tracking.",
    serviceType: "Recurring Handyman Home Maintenance",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "FixEh Handyman Services",
      url: "https://fixeh.ca/",
      telephone: "+1-778-667-0667",
      email: "fixeh.handyman@gmail.com",
    },
    areaServed: [
      "White Rock",
      "Surrey",
      "Langley",
      "Vancouver",
      "Burnaby",
      "New Westminster",
      "Richmond",
      "Coquitlam",
    ],
  };

  const script = document.createElement("script");

  script.type = "application/ld+json";
  script.id = "home-care-service-schema";
  script.text = JSON.stringify(schema);

  document.head.appendChild(script);

  return () => {
    document.getElementById("home-care-service-schema")?.remove();
  };
}, []);

  return (
    <div className="mt-16 bg-white">
      {/* HERO */}
      <section
        className="
relative min-h-[85vh]
  flex items-center overflow-hidden
  bg-cover bg-[position:60%_center] md:bg-center
  "
        style={{
          backgroundImage: "url('/home-care-hero.webp')",
        }}
      >
        {/* Light oval gradient — like the mockup */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 72% 115% at 0% 50%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 34%, rgba(255,255,255,0.72) 51%, rgba(255,255,255,0.28) 67%, rgba(255,255,255,0) 82%)",
          }}
        />

        {/* Extra soft fade for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />

        <Container className="w-full">
          <div className="relative z-10 max-w-xl py-24 md:py-32">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brandRed">
              FixEh Home Care Plans
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] text-brandBlue">
              Home Care
              <span className="block text-brandBlue">Without</span>
              <span className="block text-brandRed">the Hassle</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg md:text-xl leading-relaxed text-brandDark">
              Dedicated hands-on support for your home, rental property, office or
  business — from regular maintenance to projects, pickups and everyday
  property tasks.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#plans"
                className="
            inline-flex items-center justify-center
            rounded-xl bg-brandBlue px-7 py-4
            font-semibold text-white shadow-md
            transition duration-300
            hover:bg-brandBlueDark hover:-translate-y-0.5
          "
              >
                Explore Plans
              </a>

              <Link
                to="/contact"
                className="
            inline-flex items-center justify-center
            rounded-xl border border-gray-300
            bg-white/80 px-7 py-4
            font-semibold text-brandDark
            backdrop-blur-sm
            transition duration-300
            hover:border-brandBlue hover:text-brandBlue hover:-translate-y-0.5
          "
              >
                Ask Us a Question
              </Link>
            </div>

            <p className="mt-5 text-sm font-medium text-brandDark/80">
              Plans are currently available by request.
            </p>
          </div>
        </Container>
      </section>


      {/* MORE THAN A HANDYMAN */}
<AnimatedSection className="py-20 bg-white">
  <Container>
    <div className="text-center max-w-3xl mx-auto mb-12">
      <p className="font-semibold text-brandRed mb-3">
        More Than a Handyman
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">
        Your Home & Property Assistant
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-gray-600">
        FixEh Home Care Plans are designed for more than routine repairs.
        Use your dedicated time wherever reliable hands-on support is needed
        around your home, rental property, office or business.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Home & Property Care",
          text: "Repairs, maintenance, painting, drywall, caulking, installations, seasonal work and preventive care.",
        },
        {
          title: "Projects & Renovation Support",
          text: "Small renovation projects, preparation work, installations, finishing and practical help moving a project forward.",
        },
        {
          title: "Everyday Property Support",
          text: "Pickups, deliveries, moving assistance, supply runs, furniture transport and other practical tasks when you need reliable help.",
        },
        {
          title: "Business & Rental Support",
          text: "Recurring hands-on support for offices, rental properties and small businesses without searching for a new handyman every time.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-gray-200 bg-brandLight p-7"
        >
          <h3 className="text-xl font-semibold text-brandDark">
            {item.title}
          </h3>

          <p className="mt-3 leading-relaxed text-gray-600">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base font-medium text-brandDark">
      <span>✓ 15+ years of construction experience</span>
      <span>✓ Professional tools</span>
      <span>✓ One reliable point of contact</span>
    </div>
  </Container>
</AnimatedSection>

{/* PROPERTY FILE */}
<AnimatedSection className="py-20 bg-brandLight">
  <Container>
    <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="p-8 md:p-12">
          <p className="font-semibold text-brandRed mb-3">
            Your FixEh Property File
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-brandBlue leading-tight">
            We Don't Just Visit.
            <span className="block text-brandDark">
              We Keep Track of Your Property.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Every Home Care client has an ongoing record of their property —
            current tasks, photos, completed work, future projects and things
            to keep an eye on.
          </p>

          <p className="mt-5 leading-relaxed text-gray-600">
            Notice something between visits? Send us a photo or message.
            Spot something during a visit? We'll note it for later. Your
            property list grows naturally, so important small jobs don't get
            forgotten.
          </p>
        </div>

        <div className="p-8 md:p-12 bg-brandLight">
          <div className="space-y-6">
            {[
              {
                number: "1",
                title: "We Notice It",
                text: "If we spot something that may need attention during a visit, it can be added to your property list.",
              },
              {
                number: "2",
                title: "You Send It",
                text: "Send a photo or message whenever a new repair, project or issue comes up.",
              },
              {
                number: "3",
                title: "We Track It",
                text: "Tasks, future projects and completed work stay organized instead of being forgotten between visits.",
              },
              {
                number: "4",
                title: "We Handle It",
                text: "At each scheduled visit, we work through the priorities that matter most.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-5">
                <div
                  className={`
                    flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-full text-white font-bold
                    ${
                      item.number === "4"
                        ? "bg-brandRed"
                        : "bg-brandBlue"
                    }
                  `}
                >
                  {item.number}
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-brandDark">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Container>
</AnimatedSection>



      {/* PLANS */}
      <AnimatedSection
        id="plans"
        className="scroll-mt-28 bg-white py-20"
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="font-semibold text-brandRed mb-3">
              Monthly Home Care
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">
              Choose the Right Level of Support
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Choose the amount of dedicated FixEh time that fits your property,
  projects and monthly task list.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`
                  relative flex flex-col rounded-2xl bg-white p-8
                  transition duration-300 hover:-translate-y-1 hover:shadow-lg
                  ${plan.featured
                    ? "border-2 border-brandBlue shadow-md"
                    : "border border-gray-200 shadow-sm"
                  }
                `}
              >
                {plan.featured && (
                  <span
                    className="
                      absolute -top-4 left-1/2 -translate-x-1/2
                      rounded-full bg-brandBlue px-4 py-2
                      text-xs font-bold uppercase tracking-wide text-white
                    "
                  >
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-bold text-brandDark">
                  {plan.name}
                </h3>

                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-bold text-brandBlue">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-gray-500">/ month</span>
                </div>

                <p className="mt-4 min-h-[72px] leading-relaxed text-gray-600">
                  {plan.description}
                </p>

                <ul className="mt-7 space-y-3 flex-1">
                  {plan.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-0.5 font-bold text-brandBlue">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`
                    mt-8 inline-flex items-center justify-center
                    rounded-xl px-6 py-4 font-semibold
                    transition duration-300
                    ${plan.featured
                      ? "bg-brandRed text-white hover:bg-brandRedDark"
                      : "bg-brandBlue text-white hover:bg-brandBlueDark"
                    }
                  `}
                >
                  Ask About {plan.name}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-relaxed text-gray-500">
            Plan pricing covers handyman labour. Materials, specialty items,
            additional labour and after-hours service are charged separately
            when applicable.
          </p>
        </Container>
      </AnimatedSection>

     {/* WHAT CAN WE HELP WITH */}
<AnimatedSection className="py-20 bg-brandLight">
  <Container>
    <div className="grid lg:grid-cols-2 gap-14 items-start">
      <div>
        <p className="font-semibold text-brandRed mb-3">
          Flexible Support
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">
          What Can We Help With?
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-gray-600">
          Your scheduled time isn't limited to a short list of basic repairs.
          Use it for the practical home, property and business tasks that make
          your life easier.
        </p>

        <p className="mt-5 leading-relaxed text-gray-600">
          Larger projects, specialized work, permit-related work and services
          requiring a licensed trade or specialty equipment may require a
          separate quote.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {includedServices.map((service) => (
          <div
            key={service}
            className="
              flex items-start gap-3 rounded-xl
              border border-gray-200 bg-white p-4
            "
          >
            <span className="font-bold text-brandBlue">✓</span>
            <span className="text-brandDark">{service}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
  <h3 className="text-xl font-semibold text-brandDark">
    Need Pickup, Delivery or Transport Support?
  </h3>

  <p className="mt-3 leading-relaxed text-gray-600">
    Vehicle rental and transport arrangements may be available by request for
    furniture, materials, larger items, moving assistance or disposal runs.
    Vehicle rental, fuel, disposal fees and other third-party costs are billed
    separately.
  </p>
</div>
  </Container>
</AnimatedSection>

      {/* PERKS */}
      <AnimatedSection className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">
              Home Care Benefits
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Home Care Plans are designed to give you reliable ongoing support,
  flexibility and one trusted person who already knows your property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-brandDark">
                  {perk.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {perk.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* HOW IT WORKS */}
      <AnimatedSection className="py-20 bg-brandLight">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">
              How Home Care Works
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Simple, flexible and easy to manage from month to month.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
[
    "1",
    "Choose Your Plan",
    "Choose the amount of dedicated monthly support that fits your home, property or business.",
  ],
  [
    "2",
    "Reserve Your Time",
    "Set a regular monthly visit so your FixEh time is already on the calendar.",
  ],
  [
    "3",
    "Build Your Task List",
    "Send photos or messages whenever new repairs, projects or practical tasks come up.",
  ],
  [
    "4",
    "We Take Care of It",
    "We arrive with your priorities already organized and work through what matters most.",
  ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-gray-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-brandRed">
                  STEP {number}
                </span>

                <h3 className="mt-3 text-xl font-semibold text-brandDark">
                  {title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-200 bg-brandLight p-6"
                >
                  <h3 className="text-lg font-semibold text-brandDark">
                    {faq.question}
                  </h3>

                  <p className="mt-2 leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* FINAL CTA */}
      <AnimatedSection className="py-20 bg-brandBlue">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              One Reliable Person for Your Property.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Tell us what kind of ongoing support would make your home, rental property
  or business easier to manage. We'll help you choose the right FixEh Home
  Care Plan.
            </p>

            <Link
              to="/contact"
              className="
                mt-8 inline-flex items-center justify-center
                rounded-xl bg-brandRed px-8 py-4
                text-lg font-semibold text-white shadow-md
                transition duration-300
                hover:bg-brandRedDark hover:-translate-y-0.5
              "
            >
              Ask About Home Care Plans
            </Link>
          </div>
        </Container>
      </AnimatedSection>
    </div>
  );
}