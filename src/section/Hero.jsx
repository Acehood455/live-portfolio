import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { TbNorthStar } from "react-icons/tb";

// These match the numbers in your clipPath (objectBoundingBox coords)
const NOTCH_X_START = 0; // 5% from left
const NOTCH_X_END   = 0.63; // 60% across
const NOTCH_Y       = 0.075; // 9% down from top (notch vertical size)


// === compute notch-derived positions once per render
const NOTCH_RIGHT_PCT = NOTCH_X_END * 100;         // 63
const NOTCH_MID_Y_PCT = (NOTCH_Y * 100) / 2;       // 3.75 (center of notch height)
const GAP_FROM_NOTCH = 1.5;                          // % gap to the right of the notch
const HERO_RIGHT_PADDING = 2;                      // % padding from hero's right edge

const isDarkMode = true;

const textVariant = {
  hidden: { y: 20, opacity: 0},
  visible: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.8,
          ease: 'easeOut',
      },
  },
};

const imageVariants = {
  hidden: { x: 50, opacity: 0, },
  visible: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
          ease: 'easeOut',
          delay: 0.5,
      },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
      opacity: 1,
      transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
      },
  }, 
};


const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut", 
    },
  },
};



export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  // 🖱️ Track scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section  className="relative min-h-screen mt-3 md:mt-4 w-full max-w-[95%] md:max-w-[97%] mx-auto">
      {/* Mobile */}
      <svg
        className="absolute inset-0 w-full h-full -z-10 md:hidden"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="hero__mobile" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0.03 0
                L 0.97 0
                
                A 0.03 0.03 0 0 1 1 0.03

                L 1 0.50
                A 0.01 0.01 0 0 1 0.99 0.51
                L 0.99 0.90
                A 0.01 0.01 0 0 1 1 0.91
                
                L 1 0.95
                A 0.05 0.05 0 0 1 0.95 1
                L 0.05 1
                A 0.05 0.05 0 0 1 0 0.95

                L 0 0.70
                A 0.01 0.01 0 0 1 0.01 0.69
                L 0.01 0.30
                A 0.01 0.01 0 0 1 0.0 0.29
                
                L 0 0.03
                A 0.03 0.03 0 0 1 0.03 0
                Z
              "
            />
          </clipPath>
        </defs>

        <foreignObject width="100%" height="100%" clipPath="url(#hero__mobile)">
          <div className="w-full h-full bg-cardColor" />
        </foreignObject>
      </svg>
      
      {/* Desktop */}
      <svg className="absolute inset-0 w-full h-full hidden md:block -z-10" preserveAspectRatio="none">
        <defs>
          <clipPath id="hero__corner__folder__look" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0.05 0.09
                L 0.63 0.09
                A 0.01 0.01 0 0 0 0.64 0.08
                L 0.64 0.01
                A 0.02 0.02 0 0 1 0.66 0
                L 0.91 0
                A 0.03 0.03 0 0 1 0.94 0.03
                A 0.03 0.03 0 0 0 0.97 0.06
                A 0.03 0.03 0 0 1 1 0.09

                L 1 0.50
                A 0.01 0.01 0 0 1 0.99 0.51
                L 0.99 0.90
                A 0.01 0.01 0 0 1 1 0.91
                
                L 1 0.95
                A 0.05 0.05 0 0 1 0.95 1
                L 0.05 1
                A 0.05 0.05 0 0 1 0 0.95

                L 0 0.70
                A 0.01 0.01 0 0 1 0.01 0.69
                L 0.01 0.30
                A 0.01 0.01 0 0 1 0.0 0.29
                
                L 0 0.12
                A 0.03 0.03 0 0 1 0.03 0.09
                Z
              "
            />
          </clipPath>
        </defs>

        <foreignObject width="100%" height="100%" clipPath="url(#hero__corner__folder__look)">
          <div className="w-full h-full bg-cardColor" />
        </foreignObject>
      </svg>

      {/* Mobile: full width */}
      <div className="absolute z-20  w-full md:hidden">
        <Navbar />
      </div>

      {/* NAVBAR container positioned exactly at the notch (percent-based) */}
      <div
        // Use percentages derived from objectBoundingBox coords so scaling matches the SVG
        className="absolute z-20 hidden md:block"
        style={{
          left: `${NOTCH_X_START * 100}%`,
          width: `${(NOTCH_X_END - NOTCH_X_START) * 100}%`,
          top: `0%`,                         // place at very top of hero container
          height: `${NOTCH_Y * 100}%`,      // height equals notch vertical size
          pointerEvents: "auto",
        }}
      >
        {/* Navbar must be able to fill this container (h-full w-full) */}
        <Navbar inNotch />
      </div>

      {/* Status + Button aligned to the RIGHT EDGE of the notch, responsive */}
      <div
        className={`absolute z-30  items-center gap-3 lg:gap-4 whitespace-nowrap ${
          scrolled ? "hidden" : "hidden md:flex"
        }`}
        style={{
          top: `${NOTCH_MID_Y_PCT}%`,                          // vertically center to notch
          left: `calc(${NOTCH_RIGHT_PCT}% + ${GAP_FROM_NOTCH}%)`, // start at notch right edge + small gap
          right: `${HERO_RIGHT_PADDING}%`,                     // let it expand but keep padding on the right
          transform: "translateY(-50%)",
        }}
      >
        {/* Contact button */}
        <a href="#contact" className="group relative overflow-hidden text-[clamp(1rem,1vw+0.5rem,2rem)] px-4 py-2 font-semibold rounded-lg hover:shadow-[0px_4px_16px_0_rgba(211,187,54,.90)] hover:scale-95 hover:translate-y-0.5 duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gold transition-all duration-700 rounded-lg"></div>
            <span className="relative z-10 text-background font-semibold">
              Contact Me
            </span>
        </a>

        {/* Purple dot + text */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center">
            {/* Ripple glow */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-purple2 opacity-75 animate-ripple"></span>
            </span>

            {/* Solid pulsing dot */}
            <span className="w-2 h-2 bg-purple3 rounded-full animate-pulseDot"></span>
          </div>

          <span className="text-text text-xs font-light tracking-tighter text-[clamp(1rem,1vw+0.5rem,2rem)]">Open to Opportunities</span>
        </div>
      </div>



      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:justify-between px-6 md:px-14 py-20 md:min-h-screen gap-6 md:gap-2">
        {/* === Left: Hero Content === */}
        <div className="flex flex-col justify-center items-start flex-1">
          {/* Heading */}
          <div className="flex items-center gap-2">
            <TbNorthStar size={17} className="text-purple2" />
            <h1 className="uppercase tracking-widest text-xs md:text-sm font-medium text-text leading-snug">
              Full Stack Developer
            </h1>
          </div>

          {/* Subheading */}
          <p className="mt-2 text-4xl md:text-6xl font-extrabold text-text max-w-2xl">
            I build scalable, modern web apps from frontend to backend.
          </p>

          {/* Intro */}
          <p className="mt-2 text-base md:text-lg text-gray-400">
            Hi, I'm <span className="font-semibold text-text">Ace Taiwo 👋</span>,  
            a developer based in Nigeria with a passion for code.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-4 py-2 md:px-6 md:py-3 rounded-xl bg-gold text-background font-semibold hover:scale-95 hover:translate-y-0.5 duration-300 hover:shadow-[0px_4px_16px_0_rgba(211,187,54,.90)] transition"
            >
              See My Work
            </a>
            <a
              href="/resume.pdf"
              className="px-4 py-2 md:px-6 md:py-3 rounded-xl border border-gold text-text font-semibold hover:scale-95 hover:translate-y-0.5 duration-300 hover:shadow-[0px_4px_16px_0_rgba(211,187,54,.90)] transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* === Right: Hero Image === */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/images/heroImg.png"
            alt="Ace Taiwo"
            className="w-80 h-80 md:w-[50vw] md:h-[70vh] rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>

    
    </section>
  );
}
