// src/pages/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import HeroFont from "../components/HeroFont";
import GlowButton from "./ui/GlowButton";

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.25 },
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <section className="bg-[linear-gradient(180deg,#FAF6F0,white)] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 lg:py-28">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* LEFT SIDE - TEXT */}
          <motion.div variants={slideFromLeft} className="space-y-6">
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-4"
            >
              We craft beautiful digital experiences that{" "}
              <span className="inline-block align-baseline ml-2">
                <HeroFont
                  text="GROW BRANDS"
                  inline={true}
                  minFontSize={40}
                  textColor="#06B7A0"
                  scale={false}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 max-w-xl leading-relaxed"
            >
              Agency-grade web design & development fast, conversion focused,
              and pixel-perfect. We help SaaS and e-commerce scale with modern
              UX.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <GlowButton
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white font-semibold shadow hover:brightness-95 transition"
              >
                Our Services
              </GlowButton>
              <GlowButton
                href="#showcase"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-teal-500 transition"
              >
                Our Work
              </GlowButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 text-sm text-slate-500"
            >
              <span>Trusted by </span>
              <span className="ml-3 inline-flex gap-3">
                <span className="px-3 py-1 bg-white shadow rounded">
                  Brand A
                </span>
                <span className="px-3 py-1 bg-white shadow rounded">
                  Brand B
                </span>
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - IMAGE + shadow grouped so both hover together */}
          <motion.div variants={slideFromRight} className="relative">
            <motion.div
              className="relative w-full h-full rounded-2xl cursor-pointer"
              whileHover={{
                scale: 1.04,
                transition: { type: "spring", stiffness: 180, damping: 12 },
              }}
              style={{ transformOrigin: "center" }}
            >
              {/* teal base layer behind image */}
              <div
                className="absolute rounded-2xl -bottom-6 -right-6 w-full h-full pointer-events-none"
                style={{
                  backgroundColor: "#00B5AD",
                  zIndex: 0,
                  boxShadow: "15px 15px 0px #ffffff",
                }}
              />

              {/* image (no individual whileHover) */}
              <img
                src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png"
                alt="hero"
                className="relative z-10 object-cover w-full h-full rounded-2xl bg-white shadow-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
