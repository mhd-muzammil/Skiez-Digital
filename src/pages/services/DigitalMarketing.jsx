// src/pages/services/SeoMarketing.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Services - SEO / Growth Page (matches your UI/UX page style)
 * Paste as src/pages/services/SeoMarketing.jsx
 * Tailwind CSS + framer-motion expected in project
 *
 * White background, black text, teal accents & the same structure/UX as your UI/UX page.
 */

const portfolio = [
  {
    title: "SaaS — Organic Acquisition",
    desc: "Technical clean-up, intent-led pillar clusters, & outreach — stable top-of-funnel growth.",
    img: "https://images.unsplash.com/photo-1526378724477-27bdb3d7b1f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "E-commerce — Category SEO",
    desc: "Canonical & template fixes, category copy overhaul and performance improvements.",
    img: "https://images.unsplash.com/photo-1515165562835-c0e3d3a3e9b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Local — Multi-location",
    desc: "Local schema, GMB optimization and citation clean-up for better local visibility.",
    img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=80",
  },
];

const tech = [
  {
    name: "Google Search Console",
    logo: "https://www.svgrepo.com/show/331488/google-search-console.svg",
  },
  {
    name: "GA4",
    logo: "https://www.svgrepo.com/show/303145/google-analytics.svg",
  },
  {
    name: "Ahrefs",
    logo: "https://assets.ahrefs.com/images/logo/ahrefs-logo.svg",
  },
  {
    name: "Screaming Frog",
    logo: "https://www.screamingfrog.co.uk/wp-content/themes/screamingfrog/assets/img/logo.svg",
  },
  { name: "Semrush", logo: "https://static.semrush.com/semrush-logo.svg" },
  { name: "Hotjar", logo: "https://cdn.worldvectorlogo.com/logos/hotjar.svg" },
];

export default function SeoMarketing() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative w-full h-[420px] md:h-[520px] flex items-center"
        aria-label="SEO hero"
      >
        {/* hero image as <img> for reliability */}
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
          alt="SEO background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/hero-fallback.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <p className="inline-block text-sm font-semibold uppercase tracking-wide text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            SEO & Growth
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4">
            SEO that drives growth — research, technical fixes & content that
            converts
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg mb-6">
            We audit, prioritise and implement SEO work that increases organic
            traffic and improves conversion — engineering first, marketing
            smart.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Request audit
            </Link>
            <a
              href="#process"
              className="text-gray-200 underline hover:text-white"
            >
              See our process
            </a>
          </div>
        </motion.div>
      </section>

      {/* VALUE PROPOSITIONS (3-card professional trio like your UI/UX page) */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why our SEO service stands out
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Deep technical audits, content systems and outreach — executed with
            engineering rigor.
          </p>
        </motion.header>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              id: "audit",
              title: "Technical & Analytics Audit",
              desc: "Full crawl, CWV, indexation review and analytics mapping to reveal root causes.",
              icon: (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M21 21l-4.35-4.35"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="11"
                    cy="11"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              ),
            },
            {
              id: "content",
              title: "Content & Architecture",
              desc: "Intent-led pillar pages, cluster planning and on-page optimisation to capture demand.",
              icon: (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 12h7l3 9 4-16 4 8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              id: "outreach",
              title: "Authority & Outreach",
              desc: "Data-driven link campaigns, editorial partnerships and PR to build domain strength.",
              icon: (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
          ].map((card, i) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ translateY: -6 }}
              className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform duration-300"
              aria-labelledby={`${card.id}-title`}
              tabIndex={0}
            >
              <div className="absolute inset-x-6 -top-3 flex justify-start">
                <div className="w-14 h-0.5 rounded bg-gradient-to-r from-teal-400 to-cyan-400" />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-50 text-teal-600 shadow-sm ring-1 ring-white/60">
                    {card.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3
                    id={`${card.id}-title`}
                    className="text-xl font-semibold text-gray-900"
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:underline"
                    >
                      Talk to an expert →
                    </a>
                    <span className="text-xs text-gray-400">Proven ROI</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PORTFOLIO HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.map((p, idx) => (
            <motion.article
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
            >
              <div className="h-56 bg-gray-100">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <Link
                  to="/contact"
                  className="text-teal-600 font-medium hover:underline"
                >
                  Talk to our SEO team →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROCESS — matched style to your UI/UX page */}
      <section
        id="process"
        className="relative bg-gradient-to-b from-teal-50 via-white to-white py-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-300">
              SEO
            </span>{" "}
            Process
          </motion.h2>

          {/* Connecting line for desktop */}
          <div className="absolute hidden md:block top-[230px] left-1/2 transform -translate-x-1/2 w-[75%] h-[2px] bg-gradient-to-r from-teal-300/50 via-cyan-300/60 to-teal-300/50 rounded-full blur-sm" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: 1,
                title: "Discover",
                desc: "Crawl, analytics audit and quick-win list.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="5" />
                    <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                  </svg>
                ),
              },
              {
                step: 2,
                title: "Strategy",
                desc: "Keyword map, IA and content roadmap.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                ),
              },
              {
                step: 3,
                title: "Implement",
                desc: "Technical fixes, CWV, schema and content rollout.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M12 2l4 8-4 8-4-8 4-8z" />
                  </svg>
                ),
              },
              {
                step: 4,
                title: "Grow",
                desc: "Outreach, measurement, and iterative experiments.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center px-6 py-10"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white font-bold shadow-md">
                  {item.step}
                </div>

                <div className="mt-6 flex items-center justify-center text-teal-600 mb-3">
                  {item.icon}
                </div>

                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="absolute inset-x-8 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLING */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h4 className="text-sm text-gray-600 uppercase tracking-wider mb-6">
            Our tooling
          </h4>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {tech.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transform transition hover:scale-[1.03]"
                title={t.name}
              >
                <img
                  src={t.logo}
                  alt={t.name}
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><rect width='24' height='24' fill='%23f3f4f6'/><text x='12' y='14' text-anchor='middle' font-size='7' fill='%239ca3af'>tool</text></svg>";
                  }}
                />
                <span className="text-sm font-medium text-gray-700">
                  {t.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            Frequently asked
          </h3>

          <div className="space-y-6">
            <details className="p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                How long until we see results?
              </summary>
              <div className="mt-2 text-gray-600">
                Initial technical wins in 2–6 weeks; measurable traffic growth
                and content impact over 3–12 months depending on competition.
              </div>
            </details>

            <details className="p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                Do you provide a dedicated manager?
              </summary>
              <div className="mt-2 text-gray-600">
                Yes — for Growth and Enterprise retainers we assign an account
                lead and technical owner.
              </div>
            </details>

            <details className="p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                Can you handle migrations?
              </summary>
              <div className="mt-2 text-gray-600">
                Yes — pre-launch audits, cutover support and post-launch
                monitoring are part of our migration playbook.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to grow organic traffic that converts?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a free audit — we’ll share the top 3 quick wins for your site.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow"
            >
              Book free audit
            </Link>
            <a href="tel:+917550186096" className="text-gray-700">
              Or call +91 75501 86096
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
