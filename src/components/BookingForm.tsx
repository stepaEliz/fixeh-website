import AnimatedSection from "../components/AnimatedSection";
import Container from "./Container";

export default function BookingForm() {
  return (
    <AnimatedSection id="booking" className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE — Contact info */}
          <div>
            <h2 className="text-4xl font-bold text-brandBlue mb-4">
              Contact & Booking
            </h2>
            <p className="text-brandDark/80 mb-10">
              Reach out anytime — FixEh is always here to help.
            </p>

            <div className="space-y-4 text-lg text-brandDark">
              <p>
                <span className="font-semibold">Phone:</span> 778 667 0667
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                fixeh.handyman@gmail.com
              </p>
              <p>
                <span className="font-semibold">Instagram:</span>{" "}
                @fixeh.handyman
              </p>
            </div>

            <p className="mt-10 text-brandDark/70">Serving Lower Mainland</p>
          </div>

          {/* RIGHT SIDE — Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="
              bg-white shadow-md rounded-2xl p-8 space-y-6
              border border-brandLight
            "
          >
            {/* Web3Forms hidden fields */}
            <input
              type="hidden"
              name="access_key"
              value="5565ac16-7f83-49eb-b600-5f1e586d7a57"
            />
            <input
              type="hidden"
              name="subject"
              value="New booking request from FixEh website"
            />
            <input type="hidden" name="from_name" value="FixEh Website" />
            {/* анти-бот */}
            <input type="checkbox" name="botcheck" className="hidden" />

            <div>
              <label className="block text-brandDark font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="
                    w-full rounded-xl border border-gray-300 bg-white p-3
  text-brandDark
  placeholder:text-gray-400
  outline-none
  transition-all
  focus:border-brandBlue focus:ring-4 focus:ring-brandBlue/20
                "
              />
            </div>

            <div>
              <label className="block text-brandDark font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                required
                className="
                    w-full rounded-xl border border-gray-300 bg-white p-3
  text-brandDark
  placeholder:text-gray-400
  outline-none
  transition-all
  focus:border-brandBlue focus:ring-4 focus:ring-brandBlue/20
                "
              />
            </div>

            <div>
              <label className="block text-brandDark font-semibold mb-2">
                Your Message
              </label>
              <textarea
                rows={4}
                name="message"
                required
                className="
                    w-full rounded-xl border border-gray-300 bg-white p-3
  text-brandDark
  placeholder:text-gray-400
  outline-none
  transition-all
  focus:border-brandBlue focus:ring-4 focus:ring-brandBlue/20
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full bg-brandRed text-white py-4 rounded-xl
                text-lg font-semibold shadow-md
                hover:bg-brandRedDark transition duration-300
                hover:scale-[1.02] active:scale-[0.98]
              "
            >
              Send Request
            </button>
          </form>
        </div>
      </Container>
    </AnimatedSection>
  );
}
