import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiGoogle, SiTiktok } from "react-icons/si";

// MetaAdsPage.jsx
// Single-file React component (Tailwind CSS + framer-motion expected in project)
// Design: teal & gray palette on white background (user preference)

export default function MetaAdsPage() {
  const featureCard = (Icon, title, desc) => (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-teal-50 text-teal-600">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-teal-600">
              Meta Ads Management & Creative Strategy
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Convert scrolls into sales. We design performance-first Meta
              (Facebook & Instagram) campaigns with stunning creatives, precise
              targeting and data-driven optimisation — built for growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl shadow-sm bg-teal-600 text-white"
              >
                Start a Campaign
              </Link>
              <Link
                to="/services/marketing"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-700"
              >
                See Packages
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">+15%</div>
                <div className="text-xs text-gray-500">
                  Avg. Conversion Lift
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">$0.08</div>
                <div className="text-xs text-gray-500">Avg. CPC (demo)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-xs text-gray-500">Dashboard & Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s="
                alt="ads dashboard"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="p-3 bg-teal-50 rounded-xl">
                <SiFacebook size={20} className="text-teal-600" />
              </div>
              <div className="p-3 bg-teal-50 rounded-xl">
                <SiInstagram size={20} className="text-teal-600" />
              </div>
              <div className="p-3 bg-teal-50 rounded-xl">
                <SiTiktok size={20} className="text-teal-600" />
              </div>
              <div className="p-3 bg-teal-50 rounded-xl">
                <SiGoogle size={20} className="text-teal-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800">What we do</h2>
        <p className="text-gray-500 mt-2 max-w-2xl">
          End-to-end Meta Ads services — strategy, creatives, setup,
          optimisation and reporting.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCard(
            SiFacebook,
            "Audience Research",
            "Seed audiences, lookalikes, LTV-based targeting and interest stacking."
          )}
          {featureCard(
            SiInstagram,
            "Creative Production",
            "Carousel, Reels, Static and Motion creatives optimised for placements."
          )}
          {featureCard(
            SiTiktok,
            "Campaign Optimisation",
            "A/B testing, budget allocation, bid strategies and scaling playbooks."
          )}
          {featureCard(
            SiGoogle,
            "Analytics & Reporting",
            "Actionable dashboards, ROAS tracking and growth recommendations."
          )}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-800">
                How a typical campaign works
              </h3>
              <ol className="mt-4 space-y-4 text-gray-600">
                <li className="flex gap-4 items-start">
                  <div className="min-w-[36px] h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <div className="font-semibold">
                      Discovery & Goal Setting
                    </div>
                    <div className="text-sm">
                      We audit your brand, product-market fit and set measurable
                      KPIs.
                    </div>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="min-w-[36px] h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <div className="font-semibold">Creative Sprint</div>
                    <div className="text-sm">
                      Design multiple creatives & copy variations for testing
                      across placements.
                    </div>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="min-w-[36px] h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <div className="font-semibold">Optimization & Scale</div>
                    <div className="text-sm">
                      We iterate on winning combos and scale with ROAS-focused
                      tweaks.
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-800">Starter Package</h4>
              <p className="text-sm text-gray-500 mt-2">
                Perfect for new brands testing product-market fit
              </p>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>3 Creatives + 2 Copy Variants</li>
                <li>Audience setup & 1 week optimisation</li>
                <li>Basic dashboard</li>
              </ul>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-block px-4 py-2 rounded-lg bg-teal-600 text-white"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-gray-800">
          Creative Gallery
        </h3>
        <p className="text-gray-500 mt-2">
          Example assets and placements we design.
        </p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            className="w-full h-40 object-cover rounded-lg border border-gray-100"
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s="
            alt="creative-1"
          />
          <img
            className="w-full h-40 object-cover rounded-lg border border-gray-100"
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s="
            alt="creative-2"
          />
          <img
            className="w-full h-40 object-cover rounded-lg border border-gray-100"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s="
            alt="creative-3"
          />
          <img
            className="w-full h-40 object-cover rounded-lg border border-gray-100"
            src="https://images.unsplash.com/photo-1526378721081-8d2b6e5a7b72?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s="
            alt="creative-4"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">
            Ready to scale with Meta?
          </h3>
          <p className="text-gray-500 mt-2">
            Drop your details and we'll share a custom growth plan within 48
            hours.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-teal-600 text-white"
            >
              Get Growth Plan
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company — Meta Ads Services
          </div>
          <div className="flex gap-3">
            <Link to="/terms" className="text-sm text-gray-500">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
