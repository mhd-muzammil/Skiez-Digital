import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f1724] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand & Description */}
          <div className="col-span-2">
            {/* 👇 Replace logo path here */}
            <img
              src="/src/assets/Skiez-logo.png"
              alt="Your Logo"
              className="h-14 w-22 mb-5"
            />

            <p className="text-gray-400 leading-relaxed mb-6">
              We provide creative digital solutions from web development and
              marketing to data-driven growth strategies empowering businesses
              to scale globally.
            </p>

            <div className="text-sm space-y-2">
              <p>
                <span className="font-semibold text-white">WhatsApp:</span> +91
                9876543210
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                info@SkiezDigital.com
              </p>
            </div>
          </div>

          {/* Hire Resources */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Hire Resources
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-sky-400 transition">Hire Designer</li>
              <li className="hover:text-sky-400 transition">Hire Developer</li>
              <li className="hover:text-sky-400 transition">
                Hire Digital Marketer
              </li>
              <li className="hover:text-sky-400 transition">
                Hire 3D Modelers
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-sky-400 transition">
                Customized Web Applications
              </li>
              <li className="hover:text-sky-400 transition">E-commerce</li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Quick Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-gray-700">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-sky-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-sky-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-sky-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="hover:text-sky-400 transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <p className="text-gray-400 mb-3">
              <span className="font-semibold text-white">Enquiries:</span>{" "}
              info@skiezDigital.com
            </p>

            <h5 className="text-white font-semibold text-md mb-2">
              Connect With Us:
            </h5>
            <div className="flex gap-3">
              {["facebook", "instagram", "youtube", "twitter", "linkedin"].map(
                (icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-400 transition flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${icon}.svg`}
                      alt={icon}
                      className="w-5 h-5 invert"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Addresses */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Address
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              <br />
              <span className="font-semibold text-white">India:</span> No: 81/5,
              6th street, Shanthi Nagar, Chengalpattu District, Tamilnadu 603
              003.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} YourBrand. All Rights Reserved.</p>
          <ul className="flex gap-6 mt-3 md:mt-0">
            <li className="hover:text-sky-400 transition">Privacy Policy</li>
            <li className="hover:text-sky-400 transition">Terms</li>
            <li className="hover:text-sky-400 transition">Sitemap</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
