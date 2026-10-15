import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Check, Mail, MessageSquare, Phone } from "lucide-react";
import Container from "../components/Container";
import ProjectGallery from "../components/ProjectGallery";
import { woodSlatFaqs, woodSlatPhotos, woodSlatProcessPhoto } from "../data/woodSlat";
import AnimatedSection from "../components/AnimatedSection";

const services = [
  { number: "01", title: "Wood slat wall panels", text: "A full wall or a carefully placed section. We install decorative wood slat panels with a consistent layout, aligned seams and a neat finish at the edges." },
  { number: "02", title: "Acoustic slat panels", text: "Installation of panels designed with acoustic backing, following the chosen product’s fixing and backing requirements. We confirm the panel type and installation method with you first." },
  { number: "03", title: "Feature & accent walls", text: "Give a living room, bedroom, entryway or office a point of interest. We help work out where the panels start, stop and meet the rest of the room." },
  { number: "04", title: "TV & media walls", text: "Wood slats fitted into your TV or media wall layout, with the screen position, existing outlets and access points planned before cutting begins." },
  { number: "05", title: "Columns & smaller accents", text: "Wrap a column, frame a stairway or add texture to a narrow wall. Smaller areas deserve the same care with alignment, corners and finishing." },
  { number: "06", title: "Cutting, fitting & trim", text: "Measured cuts around existing outlets, switches, corners and trim. We plan the details so panels work with the features already in your space." },
];

const emailHref = `mailto:fixeh.handyman@gmail.com?subject=${encodeURIComponent("Wood slat wall installation quote")}&body=${encodeURIComponent("Hi FixEh, I would like a quote for wood slat / feature wall installation.\n\nCity: \nApproximate wall width and height: \nPanel product link (if chosen): \nPreferred timing: \n\nI will attach photos of the area and any corners, outlets or trim.")}`;

export default function WoodSlatInstallation() {
  const detail = woodSlatPhotos[3];
  return (
    <div className="slat-page bg-white pt-24">
      <AnimatedSection className="pb-14 pt-5 md:pb-20 md:pt-8" aria-labelledby="slat-page-title">
        <Container>
          <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brandRed">FixEh Handyman Services · Metro Vancouver</p>
              <h1 id="slat-page-title" className="mt-4 text-4xl font-bold leading-[1.12] tracking-tight text-brandDark sm:text-5xl lg:text-[3.35rem]">Wood Slat &amp;<br /><span className="text-brandBlue">Feature Wall</span><br />Installation</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">Warm wood. Clean lines. A space that feels more like yours.</p>
              <p className="mt-4 max-w-xl leading-relaxed text-gray-600">
                From a living room feature wall to a column by the stairs, FixEh installs wood
                slat panels with attention to the details you see every day. Serving Metro
                Vancouver and the Lower Mainland.
              </p>
              <a href="#photo-quote" className="slat-primary mt-7">Send us a photo for a quote. <ArrowRight size={19} aria-hidden="true" /></a>
              <a href="#our-work" className="mt-4 flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-brandBlue hover:underline">See our work <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <figure className="relative">
              <img src={detail.src} alt={detail.alt} width={detail.width} height={detail.height} fetchPriority="high" className="slat-hero-image w-full rounded-3xl object-cover" />
            </figure>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-gray-200 pt-6 text-sm font-medium text-gray-600 md:mt-14">
            {["Decorative & acoustic panel installation", "Walls, columns & accent areas", "Careful cuts & finishing"].map((item) => <li key={item} className="flex items-center gap-2"><Check size={17} className="text-brandBlue" aria-hidden="true" />{item}</li>)}
          </ul>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-brandLight py-16 md:py-20" aria-labelledby="slat-services-title">
        <Container>
          <div className="mb-12 max-w-3xl">
  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brandRed">
    Your space, thoughtfully finished
  </p>

  <h2 className="mt-3 text-3xl font-bold leading-tight text-brandBlue md:text-4xl">
    From a single accent to a whole feature wall.
  </h2>

  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
    The right layout makes the difference. We look at panel spacing, edges,
    corners and the existing features of your room before the first cut.
  </p>
</div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="rounded-2xl border border-gray-200 bg-white p-7">
                <span className="text-sm font-semibold text-brandBlue/65" aria-hidden="true">{service.number}</span>
                <h3 className="mt-4 text-xl font-semibold text-brandDark">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-600">Choosing panels? Send us the product link. Decorative panels and acoustic slat panels have different specifications; we will confirm the fitting method for your chosen product.</p>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="our-work" className="py-16 md:py-20" aria-labelledby="slat-work-title">
        <Container>
<div className="mb-9 max-w-2xl">
  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brandRed">
    A closer look
  </p>

  <h2
    id="slat-work-title"
    className="mt-3 text-3xl font-bold text-brandBlue md:text-4xl"
  >
    Wood slat installations by FixEh
  </h2>

  <p className="mt-4 max-w-xl leading-relaxed text-gray-600">
    Real FixEh project photos from a recent wood slat installation.
    Select any photo to view it full size.
  </p>
</div>
          <ProjectGallery />
          <div className="mt-12 grid overflow-hidden rounded-3xl border border-gray-200 bg-brandLight md:grid-cols-[0.8fr_1.2fr]">
            <img
              src={woodSlatProcessPhoto.src}
              alt={woodSlatProcessPhoto.alt}
              width={woodSlatProcessPhoto.width}
              height={woodSlatProcessPhoto.height}
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover md:h-full md:min-h-[360px]"
            />

            <div className="flex flex-col justify-center p-7 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brandRed">
                Behind the build
              </p>

              <h3 className="mt-3 text-2xl font-bold text-brandBlue md:text-3xl">
                Measured Cuts. Clean Fitting.
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                A clean slat installation starts before the panels reach the wall.
                We measure, plan the layout and make careful cuts for edges, corners,
                outlets and other existing details.
              </p>

              <p className="mt-4 leading-relaxed text-gray-600">
                Professional tools help keep cuts consistent and the finished installation
                neat from panel to panel.
              </p>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="border-y border-gray-200 bg-brandLight py-16 md:py-20" aria-labelledby="slat-process-title">
        <Container>
          <h2 id="slat-process-title" className="text-3xl font-bold text-brandBlue md:text-4xl">Start with a photo. We’ll take it from there.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {[
              ["01", "Show us your space", "Send a photo of the wall or column, approximate width and height, and your city. Include the panel you like, if you have one in mind."],
              ["02", "Work out the details", "We review the surface, layout, cuts and finishing with you, then confirm the scope and quote. A site visit may be needed for more involved work."],
              ["03", "Bring the wall to life", "We prepare the area, fit and install the panels, finish the agreed details and clean up the work area."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-t-2 border-brandBlue/20 pt-5">
                <p className="text-sm font-semibold text-brandRed">{number}</p>
                <h3 className="mt-3 text-xl font-semibold text-brandDark">{title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-20" aria-labelledby="slat-faq-title">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brandRed">Before we get started</p>
              <h2 id="slat-faq-title" className="mt-3 text-3xl font-bold text-brandBlue md:text-4xl">A few practical questions.</h2>
              <p className="mt-5 leading-relaxed text-gray-600">Have a particular panel or an awkward corner in mind? A photo is a good place to start.</p>
            </div>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {woodSlatFaqs.map((faq) => (
                <details key={faq.question} className="slat-faq py-5">
                  <summary className="cursor-pointer pr-5 text-base font-semibold text-brandDark">{faq.question}</summary>
                  <p className="mt-3 pr-5 leading-relaxed text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="photo-quote" className="bg-brandBlue py-16 text-white md:py-20" aria-labelledby="slat-quote-title">
        <Container>
          <div className="grid items-start gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">Let’s plan your feature wall</p>
              <h2 id="slat-quote-title" className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Send us a photo for a quote.</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-white/90">Text or email a few photos of your space. Tell us your city, approximate measurements and the look you have in mind.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="sms:+17786670667" className="slat-primary slat-primary-white"><MessageSquare size={19} aria-hidden="true" />Text photos</a>
                <a href={emailHref} className="slat-secondary"><Mail size={19} aria-hidden="true" />Email photos</a>
              </div>
              <p className="mt-4 text-sm text-white/80">Attach your photos in your messaging or email app.</p>
              <a href="tel:+17786670667" className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold hover:underline"><Phone size={17} aria-hidden="true" />+1-778-667-0667</a>
              <a href={emailHref} className="block w-fit break-all text-sm text-white/90 underline underline-offset-4">fixeh.handyman@gmail.com</a>
            </div>
            <div className="rounded-2xl border border-white/25 bg-white/10 p-7">
              <h3 className="text-xl font-semibold">Serving Metro Vancouver<br />&amp; the Lower Mainland</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/90">Vancouver · Surrey · White Rock · Delta · Langley · Richmond · Burnaby · New Westminster · Coquitlam</p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">Send your location with your photos so we can confirm availability.</p>
              <div className="mt-6 border-t border-white/20 pt-5">
                <p className="text-sm text-white/90">Have a few other jobs on your list?</p>
                <Link to="/services" className="mt-2 inline-flex min-h-11 items-center gap-2 font-semibold underline underline-offset-4">Explore our handyman services <ArrowRight size={17} aria-hidden="true" /></Link>
                <Link to="/home-care-plans" className="mt-1 block w-fit text-sm underline underline-offset-4">Or ask about ongoing Home Care Plans</Link>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </div>
  );
}
