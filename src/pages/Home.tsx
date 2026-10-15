import React from "react";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import HomeCareTeaser from "../components/HomeCareTeaser";
import ServiceAreas from "../components/ServiceAreas";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import BookingForm from "../components/BookingForm";
import WoodSlatTeaser from "../components/WoodSlatTeaser";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <HomeCareTeaser />
      <WhyChooseUs />
      <Services />
      <WoodSlatTeaser />
      <ServiceAreas />
      <HowItWorks />
      <Testimonials />
      <BookingForm />
    </>
  );
};

export default Home;
