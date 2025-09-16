import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiX } from "react-icons/hi";
import { GiHamburger } from "react-icons/gi";
import ScrollAwareWrapper from "./ScrollAwareWrapper";

export default function Navbar({ inNotch = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notchRect, setNotchRect] = useState(null);
  const notchRef = useRef(null);

  const links = ["About", "Skills", "Projects"];

  //  Measure notch placeholder when inNotch
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

  // // Style logic
  // let style = {};
  // if (inNotch && notchRect && !scrolled) {
  //   // Match notch anchor before scroll
  //   style = {
  //     position: "fixed",
  //     top: `${notchRect.top}px`,
  //     left: `${notchRect.left}px`,
  //     width: `${notchRect.width}px`,
  //     height: `${notchRect.height}px`,
  //     backgroundColor: "#0d0b0f",
  //     backdropFilter: "blur(0px)",
  //     boxShadow: "none",
  //     transition: "all 0.5s ease",
  //   };
  // } 
  // else {
  //   // Floating nav (desktop or mobile after scroll)
  //   style = {
  //     position: "fixed",
  //     top: scrolled ? "0.5rem" : "1rem",
  //     left: "50%",
  //     transform: "translateX(-50%)",
  //     width: scrolled ? (inNotch ? "60%" : "90%") : "95%",
  //     backgroundColor: scrolled 
  //       && "rgba(40, 32, 44, 0.5)"  , 
  //       // : "#0d0b0f",
  //     backdropFilter: scrolled ? "blur(14px) saturate(150%)" : "blur(0px)",
  //     WebkitBackdropFilter: scrolled ? "blur(14px) saturate(150%)" : "blur(0px)", // Safari fix
  //     border: scrolled ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
  //     boxShadow: scrolled
  //       ? "0 8px 24px rgba(0,0,0,0.2)"
  //       : "none",
  //     // borderRadius: "1rem", // optional, softer edges
  //     transition: "all 0.5s ease",
  //     paddingTop: '0.15rem',
  //     paddingBottom: '0.15rem',
  //   };
  // }

  return (
    <>
      {/* 👻 Ghost anchor inside hero (only when inNotch) */}
      {inNotch && (
        <div
          ref={notchRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
      )}

      <nav 
        className={`${surfaceClasses} overflow-hidden`} 
        style={{
          ...(inNotch && notchRect && !scrolled
            ? {
                // inNotch
                position: "fixed",
                top: `${notchRect.top}px`,
                left: `${notchRect.left}px`,
                width: `${notchRect.width}px`,
                height: `${notchRect.height}px`,
                backgroundColor: "#0d0b0f",
                backdropFilter: "blur(0px)",
                boxShadow: "none",
                transition: "all 0.5s ease",
              }
            : {
                // Floating
                position: "fixed",
                top: scrolled ? "0.5rem" : "1rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: scrolled ? (inNotch ? "60%" : "90%") : "95%",
                backgroundColor: scrolled
                  ? "rgba(40, 32, 44, 0.5)"
                  : "transparent",
                backdropFilter: scrolled
                  ? "blur(14px) saturate(150%)"
                  : "blur(0px)",
                WebkitBackdropFilter: scrolled
                  ? "blur(14px) saturate(150%)"
                  : "blur(0px)",
                border: scrolled
                  ? "1px solid rgba(255, 255, 255, 0.15)"
                  : "none",
                boxShadow: scrolled
                  ? "0 8px 24px rgba(0,0,0,0.2)"
                  : "none",
                transition: "all 0.5s ease",
                paddingTop: "0.15rem",
                paddingBottom: scrolled ? "0.15rem" : "0.20rem",
              }),
        }}
      
      >
        <div className={`${inNotch && notchRect && !scrolled ? 'picture rounded-xl' : ''} flex items-center justify-between h-full w-full px-4`}>
          <div className="flex flex-col z-10">
            <a
              href="#"
              className="text-text md:py-3 md:pt-1 text-base text-[clamp(1.5rem,1.5vw+0.5rem,2.5rem)] md:text-[clamp(1.3rem,1.3vw+0.5rem,2.5rem)] font-semibold transition-transform duration-200 hover:scale-110"
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
                Open
              </span>
            </div>
          </div>

          <ul className={`flex text-[clamp(1rem,1vw+0.5rem,2rem)] items-center z-10 ${inNotch ? 'space-x-7' : 'space-x-10'}`}>
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
              {/* Contact button */}
              <a
                href="#contact"
                className="inline-flex items-center text-[clamp(1rem,1vw+0.5rem,2rem)]  px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-lg border-2 border-purple2 text-text font-bold hover:scale-95 hover:translate-y-0.5 duration-300 hover:shadow-[0px_4px_16px_0_rgba(207,102,255,.90)] transition"
              >
                Contact Me
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
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 md:hidden ">
        <ScrollAwareWrapper>
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="
                      flex items-center gap-2 px-1 py-1 
                      bg-purple2 text-text font-semibold 
                      rounded-full  
                      transition-colors duration-300 shadow-2xl"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {/* Icon with its own circle */}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background text-text">
              {mobileMenuOpen ? <HiX size={18} /> : <GiHamburger size={18} />}
            </span>

            <span className="pr-2 text-background">Menu</span>
          </button>
        </ScrollAwareWrapper>
      </div>


      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-background z-40 md:hidden"
            />

            {/* Overlay menu */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="fixed bottom-7 inset-x-0 flex justify-center md:hidden z-50"
            >
              <div className="relative flex flex-col items-center text-lg font-semibold w-56">
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <clipPath id="mobile__pill__menu" clipPathUnits="objectBoundingBox">
                      <path
                        d="
                          M 0.05 0                    
                          L 0.95 0                    
                          A 0.05 0.05 0 0 1 1 0.05    
                          L 1 0.95                    
                          A 0.05 0.05 0 0 1 0.95 1

                          L 0.75 1
                          A 0.02 0.02 0 0 1 0.73 0.98
                          A 0.11 0.09 0 0 0 0.62 0.89
                          L 0.37 0.89
                          A 0.10 0.11 0 0 0 0.27 0.98
                          A 0.02 0.02 0 0 1 0.25 1
                          
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
                    clipPath="url(#mobile__pill__menu)"
                  >
                    <div className="w-full h-full shadow-[0px_4px_32px_0_rgba(156,39,176,.75)] bg-purple2" />
                  </foreignObject>
                </svg>

                <div className="flex flex-col items-center space-y-3 text-lg font-semibold p-6 z-10">
                  {links.map((section) => (
                    <a
                      key={section}
                      href={`#${section.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="transition-colors duration-300 hover:scale-90 text-background"
                    >
                      {section}
                      <span className="block h-0.5 bg-background origin-center transition-transform duration-300 scale-x-75"></span>
                    </a>
                  ))}
                  <a href='#contact' onClick={() => setMobileMenuOpen(false)} className="hover:scale-90 pb-3">
                    Contact
                    <span className="block h-0.5 bg-background origin-center transition-transform duration-300 scale-x-75"></span>
                  </a>
                </div>
              </div>
            </motion.div>

          </>
        )}
      </AnimatePresence>

    </>
  );
}
