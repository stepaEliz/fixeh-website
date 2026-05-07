import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import Container from "./Container";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatedSection id="booking" className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16">
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

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center shadow-md">
              <div className="text-5xl mb-4">✅</div>

              <h3 className="text-2xl font-bold text-green-800 mb-3">
                Request Sent Successfully
              </h3>

              <p className="text-green-700 leading-relaxed">
                Thank you for contacting FixEh.
                <br />
                We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="
              bg-white shadow-md rounded-2xl p-8 space-y-6
              border border-brandLight
            "
            >
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
                  text-brandDark placeholder:text-gray-400 outline-none
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
                  text-brandDark placeholder:text-gray-400 outline-none
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
                  text-brandDark placeholder:text-gray-400 outline-none
                  transition-all
                  focus:border-brandBlue focus:ring-4 focus:ring-brandBlue/20
                "
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="
                w-full bg-brandRed text-white py-4 rounded-xl cursor-pointer
                text-lg font-semibold shadow-md
                hover:bg-brandRedDark transition duration-300
                hover:scale-[1.02] active:scale-[0.98]
                disabled:cursor-not-allowed disabled:opacity-70
                disabled:hover:scale-100
              "
              >
                {status === "sending" ? "Sending..." : "Send Request"}
              </button>

              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
                  Something went wrong. Please try again or contact us directly by
                  phone or email.
                </div>
              )}
              </form>
              )}
        </div>
      </Container>
    </AnimatedSection>
  );
}