import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ inNotch = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notchRect, setNotchRect] = useState(null);
  const notchRef = useRef(null);

  const links = ["About Me", "Skills", "Projects"];

  // 📏 Measure notch placeholder when inNotch
  useEffect(() => {
    if (inNotch && notchRef.current) {
      const measure = () => {
        const rect = notchRef.current.getBoundingClientRect();
        setNotchRect(rect);
      };
      measure();
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
  }, [inNotch]);

  // 🖱️ Track scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const surfaceClasses = "z-50 transition-all duration-500 rounded-lg";

  // ✨ Style logic
  let style = {};
  if (inNotch && notchRect && !scrolled) {
    // Match notch anchor before scroll
    style = {
      position: "fixed",
      top: `${notchRect.top}px`,
      left: `${notchRect.left}px`,
      width: `${notchRect.width}px`,
      height: `${notchRect.height}px`,
      backgroundColor: "#0d0b0f",
      backdropFilter: "blur(0px)",
      boxShadow: "none",
      transition: "all 0.5s ease",
    };
  } else {
    // Floating nav (desktop or mobile after scroll)
    style = {
      position: "fixed",
      top: scrolled ? "0.5rem" : "1rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: scrolled ? (inNotch ? "70%" : "90%") : "95%",
      backgroundColor: scrolled ? "#28202c" : "#0d0b0f",
      backdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
      boxShadow: scrolled ? "0 4px 16px rgba(0,0,0,0.1)" : "none",
      transition: "all 0.5s ease",
    };
  }

  return (
    <>
      {/* 👻 Ghost anchor inside hero (only when inNotch) */}
      {inNotch && (
        <div
          ref={notchRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
      )}

      <nav className={surfaceClasses} style={style}>
        <div className="flex items-center justify-between h-full w-full px-4">
          <a
            href="#hero"
            className="text-text py-3 text-base text-[clamp(1.5rem,1vw+0.5rem,2.5rem)] font-semibold transition-transform duration-200 hover:scale-110"
          >
            Ace Taiwo
          </a>

          <ul className="flex text-[clamp(1rem,1vw+0.5rem,2rem)] items-center space-x-6">
            {links.map((section) => (
              <li key={section} className="group hidden md:flex">
                <a
                  href={`#${section.toLowerCase()}`}
                  className="font-medium text-text transition-transform duration-200 hover:scale-90 relative"
                >
                  {section}
                  <span className="block h-0.5 bg-text scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}

            <li>
              <a href="#contact" className="group relative overflow-hidden">
                <button className="px-4 py-2 z-30 font-semibold rounded-lg group-hover:shadow-[0px_4px_16px_0_rgba(211,187,54,.90)] group-hover:scale-105 relative cursor-pointer">
                  <div className="absolute inset-0 bg-gold transition-all duration-700 bg-opacity-80 rounded-lg"></div>
                  <span className="relative z-10 rounded-lg text-background font-semibold">
                    Contact Me
                  </span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Button */}
      <button
        onClick={() => setMobileMenuOpen((open) => !open)}
        className="fixed bottom-10 right-6 z-50 md:hidden shadow-[0px_4px_16px_0_rgba(211,187,54,.90)] bg-gold rounded-full p-3 text-text-950 hover:text-text-900 transition-colors duration-300"
        aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, scale: 0.2, x: 100, y: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.2, x: 100, y: 100 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="fixed md:hidden bottom-14 right-9 items-center flex flex-col text-lg font-semibold w-48"
          >
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <clipPath
                  id="right__bottom__corner__menu"
                  clipPathUnits="objectBoundingBox"
                >
                  <path
                    d="
                      M 0.05 0                    
                      L 0.95 0                    
                      A 0.05 0.05 0 0 1 1 0.05    
                      L 1 0.73                    
                      A 0.05 0.05 0 0 1 0.95 0.78
                      A 0.18 0.18 0 0 0 0.76 0.95 
                      A 0.05 0.05 0 0 1 0.71 1
                      L 0.05 1                 
                      A 0.05 0.05 0 0 1 0 0.95    
                      L 0 0.05                    
                      A 0.05 0.05 0 0 1 0.05 0    
                      Z
                    "
                  />
                </clipPath>
              </defs>
              <foreignObject
                width="100%"
                height="100%"
                clipPath="url(#right__bottom__corner__menu)"
              >
                <div className="w-full h-full md:hidden shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] bg-gold bg-opacity-80 backdrop-blur-sm" />
              </foreignObject>
            </svg>
            <div className="flex flex-col items-center space-y-6 text-lg font-semibold p-6">
              {links.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-text-900 transition-colors duration-300 z-10 text-text-950"
                >
                  {section}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
