// src/components/HeroCowork.jsx
import React from "react";
import heroIllustration from "../assets/vector1.png";

export default function HeroCowork() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-10 pb-24">
      {/* ===== Waves (behind content) ===== */}
      <WaveRightBig /> {/* big teal wave behind the illustration */}
      <WaveRightMid /> {/* lighter mid-depth wave */}
      <WaveBottomDivider /> {/* soft grey bottom divider */}
      {/* Lamps (keep) */}
      <div className="pointer-events-none absolute top-2 right-32 hidden md:block">
        <Lamp />
      </div>
      <div className="pointer-events-none absolute top-0 right-64 hidden lg:block">
        <Lamp />
      </div>
      <div className="pointer-events-none absolute top-4 right-8 hidden lg:block">
        <Lamp />
      </div>
      {/* ===== Main hero ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <div className="w-28 h-[3px] bg-teal-700/80 rounded mb-6" />
            <h1 className="font-extrabold leading-[1.05]">
              <span className="block text-5xl md:text-6xl text-teal-700 tracking-tight">
                Best Digital Marketing in
              </span>
              <span className="block text-5xl md:text-6xl text-[#0B122D] tracking-tight">
                Chennai
              </span>
            </h1>

            <ul className="mt-6 space-y-3 text-gray-700 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span>
                  Grow your business with Skiez Digital Chennai’s top digital
                  marketing agency for SEO, social media marketing, website
                  development, and app solutions.
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-sm transition"
              >
                Services
              </a>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative">
            <div className="flex justify-center md:justify-end">
              <img
                src={heroIllustration}
                alt="Coworking illustration"
                className="w-[520px] md:w-[640px] lg:w-[720px] xl:w-[820px] max-w-full object-contain select-none drop-shadow-xl"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- helpers ---------------------------------- */
function Dot() {
  return (
    <span className="mt-[10px] inline-block w-2 h-2 rounded-full bg-teal-600 flex-shrink-0" />
  );
}
function Lamp() {
  return (
    <svg
      width="40"
      height="120"
      viewBox="0 0 40 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="19" y="0" width="2" height="62" fill="#0B122D" />
      <path
        d="M10 62h20c3 0 5 2.5 5 5.5V76H5v-8.5C5 64.5 7 62 10 62Z"
        fill="#0B122D"
      />
      <rect x="7" y="76" width="26" height="6" rx="3" fill="#ffd666" />
    </svg>
  );
}

/* ----------------------------------- waves ----------------------------------- */
/* Big right teal wave */
function WaveRightBig() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute z-0 right-[-10%] top-10 w-[900px] h-[520px] md:w-[1100px] md:h-[620px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        className='fill-teal-700' /* pale teal fill */
        d="M0,256L60,245.3C120,235,240,213,360,192C480,171,600,149,720,144C840,139,960,149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224L1440,0L0,0Z"
      />
    </svg>
  );
}


/* Mid depth lighter wave to layer */
function WaveRightMid() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute z-0 right-[-16%] top-24 w-[900px] h-[520px] md:w-[1050px] md:h-[580px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        className="fill-teal-100" /* even lighter teal */
        d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,229.3C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,0L0,0Z"
      />
    </svg>
  );
}

/* Soft bottom divider (light grey) */
function WaveBottomDivider() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute z-0 bottom-0 left-0 w-full h-[180px] md:h-[220px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#F1F5F7"
        d="M0,224L60,218.7C120,213,240,203,360,170.7C480,139,600,85,720,90.7C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z"
      />
    </svg>
  );
}
