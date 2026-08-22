import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import HomeCarePlans from "./pages/HomeCarePlans";
import ScrollToTop from "./components/ScrollToTop";
import PageSEO from "./components/PageSEO";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop />
      <PageSEO />
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/home-care-plans" element={<HomeCarePlans />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
