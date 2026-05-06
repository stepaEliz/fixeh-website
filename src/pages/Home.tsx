import React from "react";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import ServiceAreas from "../components/ServiceAreas";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import BookingForm from "../components/BookingForm";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <Services />
      <ServiceAreas />
      <HowItWorks />
      <Testimonials />
      <BookingForm />
    </>
  );
};

export default Home;
