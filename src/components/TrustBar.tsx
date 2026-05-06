import Container from "./Container";

const items = [
  "★★★★★ 5-star rated on TaskRabbit",
  "Serving the Lower Mainland",
  "Fast, clean and reliable service",
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <Container>
        <div className="grid gap-3 py-4 text-sm font-semibold text-brandDark sm:grid-cols-3 sm:gap-6 sm:text-center">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-brandLight/60 px-4 py-3 text-center shadow-sm sm:bg-transparent sm:p-0 sm:shadow-none"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}