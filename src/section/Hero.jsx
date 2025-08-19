import React from "react";
import Navbar from "../components/NavBar";

// These match the numbers in your clipPath (objectBoundingBox coords)
const NOTCH_X_START = 0; // 5% from left
const NOTCH_X_END   = 0.63; // 60% across
const NOTCH_Y       = 0.075; // 9% down from top (notch vertical size)

export default function Hero() {
  return (
    <section className="relative min-h-screen mt-16 md:mt-4 w-full max-w-[95%] md:max-w-[97%] mx-auto">
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
          <div className="w-full h-full bg-cardColor backdrop-blur-sm drop-shadow-lg" />
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
          <div className="w-full h-full bg-cardColor backdrop-blur-sm drop-shadow-lg" />
        </foreignObject>
      </svg>

      {/* Mobile: full width */}
      <div className="absolute z-10  w-full md:hidden">
        <Navbar />
      </div>

      {/* NAVBAR container positioned exactly at the notch (percent-based) */}
      <div
        // Use percentages derived from objectBoundingBox coords so scaling matches the SVG
        className="absolute z-10 hidden md:block"
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

      {/* Example hero content below the notch */}
      {/* <div className="pt-6 md:pt-8"> 
        <div className="h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to my portfolio</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700">Full Stack Developer</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
