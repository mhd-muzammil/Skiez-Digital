// src/pages/services/UIUX.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


/**
 * Services - UI / UX Page
 * Paste as src/pages/services/UIUX.jsx
 * Tailwind CSS + framer-motion expected in project
 */

const portfolio = [
  {
    title: "SaaS Dashboard Redesign",
    desc: "Cleaner data visualizations, improved task flows and mobile-first interactions.",
    img: "https://images.unsplash.com/photo-1526378720562-5c0f7b4b8b71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "E-commerce UX Overhaul",
    desc: "Checkout conversion optimization and product discovery improvements.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mobile App Prototype",
    desc: "User-tested prototype with clear onboarding and retention-focused flows.",
    img: "https://images.unsplash.com/photo-1581073694683-8b63b7b3fa9a?auto=format&fit=crop&w=1200&q=80",
  },
];

  const tech = [
    /* Design & Research */
    {
      name: "Figma",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    },
    {
      name: "FigJam",
      logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg",
    },
    {
      name: "Sketch",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sketch/sketch-original.svg",
    },
    {
      name: "Adobe XD",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/xd/xd-plain.svg",
    },
    {
      name: "Illustrator",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg",
    },
    {
      name: "Miro",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/miro.svg",
    },

    /* Prototyping & Motion */
    
    {
      name: "Figma Prototypes",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    },

    /* Research & Testing */

    {
      name: "Hotjar",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hotjar.svg",
    },

    /* Handoff & Component System */
    {
      name: "Storybook",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/storybook/storybook-original.svg",
    },

    /* Collaboration & Delivery */
    {
      name: "GitHub",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
    {
      name: "Notion",
      logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/notion.svg",
    },
    {
      name: "Jira",
      logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jira.svg",
    },
  ];

export default function UIUX() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative w-full h-[420px] md:h-[520px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="UI UX design hero"
      >
        {/* dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-3xl md:text-5xl lg:text-3xl font-extrabold leading-tight text-white mb-4">
            UI / UX DESIGN
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg mb-6">
            UI/UX design services that create stunning, user-friendly, and
            conversion-driven digital experiences to elevate your brand and
            boost online engagement.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-gray-700 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Book a UX Audit
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

      {/* VALUE PROPOSITIONS */}
      {/* UI/UX — Professional feature trio */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why our UI / UX service stands out
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Research-led design, rapid validation and conversion-focused UX —
            built to scale.
          </p>
        </motion.header>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              id: "research",
              title: "Research-led Design",
              desc: "We pair qualitative interviews with quantitative analytics to identify real user needs and measurable opportunities.",
              // magnifier
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
              id: "prototype",
              title: "Rapid Prototyping",
              desc: "Clickable prototypes and moderated tests accelerate decision-making — saving dev time and reducing risk.",
              // cursor/hand
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
              id: "conversion",
              title: "Conversion Focused",
              desc: "We design funnels and micro-interactions that guide users to activation, retention and measurable business outcomes.",
              // rocket/arrow
              icon: (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 3c3 1 6 4 8 8l-9 9-9-9C6 7 9 4 12 3z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8v5"
                    stroke="currentColor"
                    strokeWidth="1.4"
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
              className="relative bg-teal-400 border border-gray-600 rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform duration-300 focus-within:shadow-lg"
              aria-labelledby={`${card.id}-title`}
              tabIndex={0}
            >
              {/* thin top accent */}
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
                    className="text-xl font-semibold text-gray-700"
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2 text-gray-900 leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal-50 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-200 rounded"
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
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>

                    <span className="text-xs text-teal-50 tracking-wide">
                      Proven process
                    </span>
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
                  Talk to our designers →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      {/* UI/UX PROCESS — Modern Professional Timeline */}
      <section
        id="process"
        className="relative bg-gradient-to-b from-teal-400 via-white to-white py-24 overflow-hidden"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-100">
              UI / UX
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
                desc: "User research, stakeholder interviews, and analytics audits reveal key insights.",
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
                title: "Define",
                desc: "Personas, journey maps, and product requirements bring clarity to the solution.",
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
                title: "Design",
                desc: "Wireframes, interactive prototypes, and visual design align teams and users.",
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
                title: "Validate",
                desc: "Usability testing, iterations, and engineering handoff for reliable implementation.",
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
                {/* Step number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white font-bold shadow-md">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="mt-6 flex items-center justify-center text-teal-600 mb-3">
                  {item.icon}
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent line on hover */}
                <div className="absolute inset-x-8 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACKS */}

      <section className="py-16 border-t border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-10">
            Our Tooling & Tech Stack
          </h4>

          {/* Gradient fade edges for depth */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Row 1 - Left to Right */}
          <div className="relative flex overflow-hidden mb-10">
            <div
              className="flex gap-10 animate-marquee whitespace-nowrap"
              style={{ animationDuration: "40s" }}
            >
              {tech.concat(tech).map((t, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex flex-col items-center justify-center transition-transform hover:scale-110"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    className="h-10 w-auto object-contain drop-shadow-md"
                    loading="lazy"
                  />
                  <span className="text-xs font-semibold text-gray-600 mt-2">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative flex overflow-hidden">
            <div
              className="flex gap-10 animate-marquee-reverse whitespace-nowrap"
              style={{ animationDuration: "42s" }}
            >
              {tech.concat(tech).map((t, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex flex-col items-center justify-center transition-transform hover:scale-110"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    className="h-10 w-auto object-contain drop-shadow-md"
                    loading="lazy"
                  />
                  <span className="text-xs font-semibold text-gray-600 mt-2">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animations */}
        <style>
          {`
    @keyframes marquee {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    @keyframes marquee-reverse {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      animation: marquee linear infinite;
    }
    .animate-marquee-reverse {
      display: flex;
      animation: marquee-reverse linear infinite;
    }
    .animate-marquee:hover,
    .animate-marquee-reverse:hover {
      animation-play-state: paused;
    }
    `}
        </style>
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
                How long does a UI/UX project take?
              </summary>
              <div className="mt-2 text-gray-600">
                Small projects: 2–4 weeks. Medium: 6–8 weeks. Large enterprise:
                depends on scope.
              </div>
            </details>

            <details className="p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                Do you provide design handoff assets?
              </summary>
              <div className="mt-2 text-gray-600">
                Yes — we deliver Figma files, spec documentation, and
                ready-to-implement assets for developers.
              </div>
            </details>

            <details className="p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                Can you work with my existing dev team?
              </summary>
              <div className="mt-2 text-gray-600">
                Absolutely — we collaborate during handoff, support design QA,
                and offer dev-facing documentation.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to improve conversion with better UX?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a UX audit and get a prioritized roadmap of improvements.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow"
            >
              Book audit
            </Link>
            <a href="tel:+919876543210" className="text-gray-700">
              Or call +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
