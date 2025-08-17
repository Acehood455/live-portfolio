// import React from "react";
// import Navbar from "../components/NavBar";

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen md:mt-4 w-full md:max-w-[90%] md:mx-auto">
//       {/* Clipped Background */}
//       <svg
//         className="absolute inset-0 w-full h-full z-0"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <clipPath id="hero__corner__folder__look" clipPathUnits="objectBoundingBox">
//             <path
//               d="
//                 M 0.05 0.09
//                 L 0.6 0.09
//                 A 0.05 0.05 0 0 0 0.65 0.05
//                 A 0.05 0.05 0 0 1 0.7 0
//                 L 0.97 0
//                 A 0.03 0.03 0 0 1 1 0.03
//                 L 1 0.95
//                 A 0.05 0.05 0 0 1 0.95 1
//                 L 0.05 1
//                 A 0.05 0.05 0 0 1 0 0.95
//                 L 0 0.12
//                 A 0.03 0.03 0 0 1 0.03 0.09
//                 Z
//               "
//             />
//           </clipPath>
//         </defs>

//         <foreignObject
//           width="100%"
//           height="100%"
//           clipPath="url(#hero__corner__folder__look)"
//         >
//           <div className="w-full h-full bg-lightpurple/50 bg-opacity-80 backdrop-blur-sm drop-shadow-lg" />
//         </foreignObject>
//       </svg>

//       {/* Content Above the Background */}
//       <div className="relative z-10">
//         <Navbar />
//         {/* Other hero content here */}
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Navbar from "../components/NavBar";

// These match the numbers in your clipPath (objectBoundingBox coords)
const NOTCH_X_START = 0; // 5% from left
const NOTCH_X_END   = 0.65; // 60% across
const NOTCH_Y       = 0.075; // 9% down from top (notch vertical size)

export default function Hero() {
  return (
    <section className="relative min-h-screen mt-2 md:mt-4 w-full max-w-[99%] md:max-w-[97%] mx-auto">
      {/* Background clipped shape (keeps objectBoundingBox coords like yours) */}
      <svg className="absolute inset-0 w-full h-full -z-10" preserveAspectRatio="none">
        <defs>
          <clipPath id="hero__corner__folder__look" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0.05 0.09
                L 0.6 0.09
                A 0.05 0.05 0 0 0 0.65 0.05
                A 0.05 0.05 0 0 1 0.7 0
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
          <div className="w-full h-full bg-lightpurple/50 backdrop-blur-sm drop-shadow-lg" />
        </foreignObject>
      </svg>

      {/* NAVBAR container positioned exactly at the notch (percent-based) */}
      <div
        // Use percentages derived from objectBoundingBox coords so scaling matches the SVG
        className="absolute z-10"
        style={{
          left: `${NOTCH_X_START * 100}%`,
          width: `${(NOTCH_X_END - NOTCH_X_START) * 100}%`,
          top: `0%`,                         // place at very top of hero container
          height: `${NOTCH_Y * 100}%`,      // height equals notch vertical size
          pointerEvents: "auto",
          display: "block",
        }}
      >
        {/* Navbar must be able to fill this container (h-full w-full) */}
        <Navbar inNotch />
      </div>

      {/* Example hero content below the notch */}
      <div className="pt-6 md:pt-8"> {/* add a little padding so body doesn't hide behind the notch */}
        <div className="h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to my portfolio</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
