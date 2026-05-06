import AnimatedSection from "./AnimatedSection";
import Container from "./Container";

export default function Testimonials() {
  const reviews = [
    {
      name: "Jennifer R.",
      service: "Yard Work",
      text: "Came right away, did a quality job and fast too.",
      date: "Apr 19, 2025",
      avatar: "https://i.pravatar.cc/80?img=47",
    },
    {
      name: "Leloi M.",
      service: "Plumbing Help",
      text: "Very accommodating and left everything tidy and clean. Worked efficiently in a tight space!",
      date: "May 13, 2025",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      name: "Michelle K.",
      service: "General Mounting",
      text: "Amazing work, very professional and detail-oriented. Highly recommend!",
      date: "Mar 15, 2025",
      avatar: "https://i.pravatar.cc/80?img=33",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-brandLight">
      <Container>
        {/* Title */}
        <h2 className="text-4xl font-bold text-brandBlue text-center mb-3">
          What Clients Say
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Real 5-star reviews from verified clients across the Lower Mainland.
          Trusted handyman services you can rely on.
        </p>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="
                p-8 rounded-2xl bg-brandLight/50 border border-gray-200 
                shadow-sm hover:shadow-lg transition-all duration-300
              "
            >
              {/* Top: Avatar + Name */}
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <p className="font-semibold text-brandDark">{r.name}</p>
                  <p className="text-xs text-gray-500">Verified Client</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-yellow-500 text-lg mb-3">
                {"★★★★★"}
              </div>

              {/* Service */}
              <h3 className="font-semibold text-brandDark mb-1">{r.service}</h3>

              {/* Text */}
              <p className="text-gray-600 mb-4 leading-relaxed">{r.text}</p>

              {/* Date */}
              <p className="text-xs text-gray-400">{r.date}</p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
