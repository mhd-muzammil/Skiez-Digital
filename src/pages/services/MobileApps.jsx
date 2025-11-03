// src/pages/services/MobileApp.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Mobile App Development — full page
 * Requires Tailwind CSS and framer-motion
 */

const mobileTech = [
  {
    name: "React Native",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Flutter",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
  },
  {
    name: "Expo",
    logo: "https://raw.githubusercontent.com/expo/vector-icons/master/src/Expo.png",
  },
  {
    name: "Kotlin",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Swift",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
  },
  {
    name: "Figma",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  },
  {
    name: "Lottie",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/lottie.svg",
  },
  {
    name: "Redux",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "Zustand",
    logo: "https://avatars.githubusercontent.com/u/105983615?s=200&v=4",
  },
  {
    name: "Firebase",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
  },
  {
    name: "GraphQL",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
  },
  {
    name: "REST APIs",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/api.svg",
  },
  {
    name: "Fastlane",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fastlane.svg",
  },
  {
    name: "App Store",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apple.svg",
  },
  {
    name: "Play Store",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googleplay.svg",
  },
  {
    name: "GitHub",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "Jira",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jira.svg",
  },
];

const portfolio = [
  {
    title: "RideShare MVP",
    desc: "Realtime location, payments and driver management — shipped in 10 weeks.",
    img: "https://images.unsplash.com/photo-1523475496153-3d6cc0b3ed3c?auto=format&fit=crop&w=1200&q=80",
    result: "20% higher retention in month 1",
  },
  {
    title: "Fitness Tracker App",
    desc: "Battery-efficient sensors integration and onboarding flows — integrated wearables support.",
    img: "https://images.unsplash.com/photo-1541558612769-7b5fb3a7f89b?auto=format&fit=crop&w=1200&q=80",
    result: "4.8★ on app store after launch",
  },
  {
    title: "E-commerce Mobile PWA",
    desc: "Fast browsing, saved carts and offline support with push notifications.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    result: "Conversion uplift 32%",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Discovery",
    desc: "Workshops, stakeholder interviews and market research to define goals & KPIs.",
    accent: "Research",
  },
  {
    step: "2",
    title: "Design",
    desc: "Interactive prototypes, user testing and UI systems for rapid feedback cycles.",
    accent: "Prototyping",
  },
  {
    step: "3",
    title: "Build",
    desc: "Component-driven development, automated tests, and CI/CD for reliable releases.",
    accent: "Engineering",
  },
  {
    step: "4",
    title: "Launch & Support",
    desc: "Monitoring, performance optimisations and iterative improvements after launch.",
    accent: "Growth",
  },
];

export default function MobileApp() {
  // <-- define reduceMotion correctly to avoid ReferenceError
  const reduceMotion = useReducedMotion();

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative w-full h-[460px] md:h-[560px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Mobile app development hero"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Mobile Apps that scale —{" "}
              <span className="text-teal-400">fast</span>, reliable & delightful
            </h1>
            <p className="mt-4 text-gray-200">
              Native, cross-platform and PWA — product-led mobile apps focusing
              on retention, performance and measurable growth.
            </p>
            <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-full font-semibold shadow"
              >
                Start a Project
              </Link>
              <a href="#process" className="text-gray-200 underline">
                See our process
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-white/5 rounded-xl p-4 shadow-inner border border-white/10">
              <div className="text-white/90 text-sm">Quick estimate</div>
              <div className="mt-3 text-white font-semibold text-2xl">
                MVP from <span className="text-teal-300">₹120,000</span>
              </div>
              <div className="mt-3 text-gray-300 text-sm">
                Typical timeline: 8–12 weeks
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-8 text-center tracking-tight text-gray-900"
        >
          What we build
          <span className="block mt-3 text-sm text-gray-500 font-medium">
            Practical mobile products — engineered for performance, retention &
            scale
          </span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Cross-platform Expertise",
              text: "React Native & Flutter — single codebase speed with native quality where it matters.",
              icon: (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 12l9-9 9 9-9 9-9-9z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 3v18"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              metric: "Native feel · One codebase",
            },
            {
              title: "Performance & Battery Optimized",
              text: "Background sync, efficient rendering and native modules ensure low battery use and fast load times.",
              icon: (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 2v6m0 8v6M4 12h16"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              metric: "Smooth UI · Lower app churn",
            },
            {
              title: "Product-first Design",
              text: "User-tested onboarding, smart microcopy, and retention-first flows that increase activation.",
              icon: (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 2l3 7h7l-5.5 4 2 7L12 17 5.5 20 7.5 13 2 9h7l3-7z"
                    stroke="currentColor"
                    strokeWidth="1.05"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              metric: "Higher activation · Faster A/B",
            },
          ].map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col gap-4 p-6 rounded-2xl bg-teal-400 border border-gray-500 shadow-sm hover:shadow-lg focus-within:shadow-lg transition-all duration-250"
              tabIndex={0}
              aria-labelledby={`build-${i}-title`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center text-teal-600 ring-1 ring-white/60">
                    {card.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3
                    id={`build-${i}-title`}
                    className="text-xl font-semibold text-gray-900"
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-semibold text-gray-600 tracking-wide">
                  {card.metric}
                </span>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-100 rounded"
                  aria-label={`Learn more about ${card.title}`}
                >
                  Learn how
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-2 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* TOOLING */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm text-gray-600 uppercase tracking-wider">
              Our Tooling
            </h4>
            <p className="text-gray-700 text-sm">
              Platform, prototyping, infra, analytics & delivery tools we use
              for mobile apps.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {mobileTech.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transform transition hover:scale-[1.02]"
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
                      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><rect width='24' height='24' fill='%23f3f4f6'/><text x='12' y='14' text-anchor='middle' font-size='7' fill='%239ca3af'>logo</text></svg>";
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

      {/* SELECTED WORK */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Selected mobile work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.map((p, i) => (
            <motion.article
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <div className="h-56 bg-gray-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
                <div className="text-xs text-teal-600 font-medium">
                  {p.result}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* TIMELINE / PROCESS (replace existing section) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900"
              >
                How we work
              </motion.h2>
      
              <div className="relative max-w-3xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200 hidden md:block" />
      
                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Discovery",
                      desc: "Workshops, stakeholder interviews and market research to define goals & KPIs.",
                      accent: "Research",
                    },
                    {
                      step: "2",
                      title: "Design",
                      desc: "Interactive prototypes, user testing and UI systems for rapid feedback cycles.",
                      accent: "Prototyping",
                    },
                    {
                      step: "3",
                      title: "Build",
                      desc: "Component-driven development, automated tests, and CI/CD for reliable releases.",
                      accent: "Engineering",
                    },
                    {
                      step: "4",
                      title: "Launch & Support",
                      desc: "Monitoring, performance optimisations and iterative improvements after launch.",
                      accent: "Growth",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.08 }}  
                      className="flex items-start gap-6"
                      aria-labelledby={`process-${item.step}-title`}
                    >
                      {/* Step indicator */}
                      <div className="relative flex-shrink-0">
                        <div className="md:absolute md:-left-[44px] md:top-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white font-semibold shadow-lg">
                          {item.step}
                        </div>
      
                        {/* small accent chip for mobile (visible on small screens) */}
                        <div className="block md:hidden">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                              {item.step}
                            </div>
                          </div>
                        </div>
                      </div>
      
                      {/* Content card */}
                      <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h3
                              id={`process-${item.step}-title`}
                              className="text-lg font-semibold text-gray-900"
                            >
                              {item.title}
                            </h3>
                            <div className="text-sm text-teal-600 font-medium mt-1">
                              {item.accent}
                            </div>
                          </div>
                          {/* subtle arrow / icon */}
                          <svg
                            className="w-6 h-6 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
      
                        <p className="mt-3 text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
      
                        {/* optional micro-CTA */}
                        <div className="mt-4">
                          <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:underline"
                          >
                            Talk to an expert
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 12h14M12 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

      {/* PRICING TIERS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Pricing plans (estimates)
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Starter",
              price: "₹120k",
              desc: "MVP - core flows, auth, basic analytics",
              features: ["Auth", "Core flows", "Push notifications"],
            },
            {
              name: "Growth",
              price: "₹300k",
              desc: "Refined UX, payments, 3rd party integrations",
              features: ["Payments", "Analytics", "A/B testing"],
            },
            {
              name: "Enterprise",
              price: "Custom",
              desc: "Full platform, SSO, dedicated SLAs",
              features: ["SLA", "Advanced security", "On-prem options"],
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md"
            >
              <h4 className="text-xl font-semibold mb-2">{p.name}</h4>
              <div className="text-2xl font-bold text-teal-600 mb-2">
                {p.price}
              </div>
              <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
              <ul className="text-gray-700 list-inside mb-4">
                {p.features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full font-medium"
              >
                Request quote
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            Frequently asked
          </h3>
          <div className="space-y-4">
            <details className="p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                How long to build an MVP?
              </summary>
              <div className="mt-2 text-gray-600">
                Usually 8–12 weeks for a focused MVP depending on scope.
              </div>
            </details>

            <details className="p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                Do you publish to stores?
              </summary>
              <div className="mt-2 text-gray-600">
                Yes — we handle App Store / Play Store submission and follow-up
                fixes.
              </div>
            </details>

            <details className="p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                Can you work with an in-house team?
              </summary>
              <div className="mt-2 text-gray-600">
                Absolutely — we can integrate with your engineering team for a
                smooth handoff.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to build a high-performing mobile app?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a free discovery call — we'll audit your idea and suggest a
            roadmap.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow"
            >
              Book discovery call
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
