// src/pages/services/SocialMediaMarketing.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SocialMediaMarketing() {
  const services = [
    {
      title: "Strategy & Calendar",
      desc: "Audience-first content calendar, channel mix and campaign planning.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Creative Production",
      desc: "Short-form video, carousel posts, reels and stories designed for engagement.",
      img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Community & Engagement",
      desc: "Community management, moderation and influencer outreach to build social proof.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Paid Social",
      desc: "Campaign setup, creative testing and ROAS optimisation across Meta, X, and TikTok.",
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1520975922784-3b36a5d3c1f6?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
  ];

  const highlights = [
    {
      title: "Trend Spotting",
      desc: "We analyse emerging platform trends and adapt them into your content plan before they peak.",
      icon: "🔎",
    },
    {
      title: "UGC Integration",
      desc: "We blend influencer and user-generated content to humanize your brand and boost credibility.",
      icon: "🤝",
    },
    {
      title: "Analytics & Optimization",
      desc: "Deep dive reporting on CTR, engagement, and conversion metrics to refine strategy each month.",
      icon: "📊",
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹15,000 / mo",
      bullets: ["12 posts / mo", "Basic community support", "Monthly report"],
    },
    {
      name: "Growth",
      price: "₹45,000 / mo",
      bullets: [
        "30 posts + 8 reels",
        "Weekly community & DMs",
        "Bi-weekly reports",
      ],
      featured: true,
    },
    {
      name: "Scale",
      price: "Custom",
      bullets: [
        "Full-funnel paid + organic",
        "Dedicated creative team",
        "Advanced reporting & analytics",
      ],
    },
  ];

  const tools = [
    {
      name: "Canva",
      logo: "/src/assets/canva.png",
    },
    {
      name: "Later",
      logo: "https://seeklogo.com/images/L/later_logo_0D8A4C3D5E-seeklogo.com.png",
    },
    {
      name: "Meta Ads",
      logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
    },
    {
      name: "TikTok Ads",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/TikTok_App_icon_%282018%E2%80%93present%29.svg",
    },
    {
      name: "Hootsuite",
      logo: "https://cdn.worldvectorlogo.com/logos/hootsuite.svg",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[480px] md:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975922784-3b36a5d3c1f6?auto=format&fit=crop&w=1800&q=80')",
        }}
        aria-label="Social media marketing hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            Social Media Marketing 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-gray-200 mt-4 max-w-2xl mx-auto"
          >
            Creative-first social campaigns, audience building and paid
            amplification to drive measurable growth.
          </motion.p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow"
            >
              Start a Campaign
            </Link>
            <a
              href="/assets/smm-catalog.pdf"
              className="text-gray-200 underline"
            >
              Download SMM Catalog
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          What we do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-gradient-to-b from-teal-50 to-white">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Recent creative highlights
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl shadow-md bg-white"
            >
              <img
                src={g}
                alt={`gallery-${i}`}
                className="w-full h-56 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOCIAL MEDIA HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Social Media Highlights
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{h.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-gradient-to-b from-white to-teal-50">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Packages
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`p-6 rounded-2xl border ${
                p.featured
                  ? "border-teal-300 shadow-xl"
                  : "border-gray-100 shadow-sm"
              } bg-white`}
            >
              {p.featured && (
                <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold mb-3">
                  Popular
                </div>
              )}
              <h4 className="text-lg font-semibold mb-2">{p.name}</h4>
              <div className="text-2xl font-extrabold text-gray-900 mb-4">
                {p.price}
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                {p.bullets.map((b, j) => (
                  <li key={j}>• {b}</li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`inline-block w-full text-center py-2 rounded-xl font-semibold ${
                  p.featured
                    ? "bg-teal-600 text-white"
                    : "bg-white text-teal-700 border border-teal-600"
                }`}
              >
                Start {p.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-12 border-t border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-8">
            Tooling & partners
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {tools.map((t, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <img
                  src={t.logo}
                  alt={t.name}
                  className="h-10 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
          >
            Ready to make your brand social-first?
          </motion.h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build scroll-stopping creative and campaigns that bring
            measurable results. Book a free strategy call.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Schedule a Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
