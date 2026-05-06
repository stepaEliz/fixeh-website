import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandDark text-white">
      <Container className="py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">FixEh Handyman Services</h3>
            <p className="text-sm text-gray-100">
              Reliable repairs, assembly, painting and maintenance across the
              Lower Mainland.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-1 text-sm text-gray-100">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-1 text-sm text-gray-100">
              <li>Phone: 778 667 0667</li>
              <li>Email: fixeh.handyman@gmail.com</li>
              <li>Instagram: @fixeh.handyman</li>
              <li>Serving the Lower Mainland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} FixEh Handyman Services. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
