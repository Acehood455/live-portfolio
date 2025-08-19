import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ inNotch = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notchRect, setNotchRect] = useState(null);
  const notchRef = useRef(null);

  const links = ["About", "Skills", "Projects"];

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

  const surfaceClasses = "z-50 transition-all duration-500 rounded-xl";

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
  } 
  else {
    // Floating nav (desktop or mobile after scroll)
    style = {
      position: "fixed",
      top: scrolled ? "0.5rem" : "1rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: scrolled ? (inNotch ? "70%" : "90%") : "95%",
      backgroundColor: scrolled 
        ? "rgba(40, 32, 44, 0.5)"   
        : "#0d0b0f",
      backdropFilter: scrolled ? "blur(14px) saturate(150%)" : "blur(0px)",
      WebkitBackdropFilter: scrolled ? "blur(14px) saturate(150%)" : "blur(0px)", // Safari fix
      // border: scrolled ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
      boxShadow: scrolled
        ? "0 8px 24px rgba(0,0,0,0.2)"
        : "none",
      // borderRadius: "1rem", // optional, softer edges
      transition: "all 0.5s ease",
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',
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
          <div className="flex flex-col">
            <a
              href="#"
              className="text-text md:py-3 md:pt-1 text-base text-[clamp(1.5rem,1.5vw+0.5rem,2.5rem)] md:text-[clamp(1.6rem,1.5vw+0.5rem,2.5rem)] font-semibold transition-transform duration-200 hover:scale-110"
            >
              Ace Taiwo
            </a>
            {/* Status under name on mobile only */}
            {/* Mobile Version */}
            <div className="flex md:pb-1 items-center gap-2 md:hidden">
              {/* Purple pulsing dot */}
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-purple2 opacity-75 animate-ripple"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple3 animate-pulseDot"></span>
              </div>
              <span className="text-sm text-text font-light rounded-full px-1">
                Active
              </span>
              {/* <span className="text-sm text-text font-light bg-text/10 backdrop-blur-sm border border-text/20 rounded-full px-1 animate-pulse">
                Open to Opportunities
              </span> */}
            </div>
          </div>
          
          

          <ul className="flex text-[clamp(1rem,1vw+0.5rem,2rem)] items-center space-x-10">
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

            <li className={`block md:flex items-center gap-3  whitespace-nowrap md:${scrolled ? "block" : "hidden"}`}>
              <a href="#contact" className="group relative overflow-hidden">
                <button className="px-4 py-2 z-30 font-semibold rounded-lg group-hover:shadow-[0px_4px_16px_0_rgba(211,187,54,.90)] group-hover:scale-105 relative cursor-pointer">
                  <div className="absolute inset-0 bg-gold transition-all duration-700 rounded-lg"></div>
                  <span className="relative z-10 rounded-lg text-background font-semibold">
                    Contact Me
                  </span>
                </button>
              </a>

              {/* Purple dot on floating navbar */}
              <div className="md:flex items-center hidden gap-2">
                <div className="relative flex items-center justify-center">
                  {/* Ripple glow */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-purple2 opacity-75 animate-ripple"></span>
                  </span>

                  {/* Solid pulsing dot */}
                  <span className="w-2 h-2 bg-purple3 rounded-full animate-pulseDot"></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Button */}
      <button
        onClick={() => setMobileMenuOpen((open) => !open)}
        className="fixed bottom-10 right-6 z-50 md:hidden shadow-[0px_4px_16px_0_rgba(211,187,54,.90)] bg-gold rounded-full p-3 text-background hover:text-text-900 transition-colors duration-300"
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
                <div className="w-full h-full md:hidden shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] bg-gold" />
              </foreignObject>
            </svg>
            <div className="flex flex-col items-center space-y-6 text-lg font-semibold p-6">
              {links.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-text-900 transition-colors duration-300 z-10 text-background"
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
