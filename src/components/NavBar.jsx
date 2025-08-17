// import { motion, AnimatePresence } from "motion/react";

// import { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

//   const links = ["About Me", "Skills", "Projects", ];

//   return (
//     <>
//       {/* Desktop Navbar */}
//       {/* <nav className="z-20  left-1/2 w-full -translate-x-1/2 md:mt-4 md:max-w-[90%] bg-lightpurple/50 backdrop-blur-sm bg-opacity-80 md:rounded-2xl shadow-md px-6 py-1 flex justify-between items-center md:flex"> */}
//       <nav
//   className={`
//   absolute top-6 left-[5%] w-[90%] 
//   z-20 px-6 py-2 
//   flex justify-between items-center 
//   rounded-xl bg-white/60 backdrop-blur-sm shadow-lg
//   transition-all duration-500 ease-in-out
// `}
// >
//         <a
//           href="#hero"
//           className="text-text-900 text-lg md:text-xl font-semibold transition-transform duration-300 hover:scale-105"
//         >
//           Ace Taiwo
//         </a>

//         <ul className="flex space-x-8 items-center">
//           {links.map((section) => (
//             <li key={section} className="group hidden md:flex">
//               <a
//                 href={`#${section.toLowerCase()}`}
//                 className=" font-medium text-text-900 hover:text-text-800 transition-colors duration-300 relative"
//               >
//                 {section}
//                 <span className="block h-0.5 bg-text-800 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
//               </a>
//             </li>
//           ))}

//           <li className="ml-8">
//             <a href="#contact" className="group">
//               <div className="inner">
//                 {/* <button className="transition-colors duration-300 px-5 py-2 rounded-lg shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] group-hover:shadow-[0px_4px_32px_0_rgba(42,37,9,.70)] bg-gold text-text-900 group-hover:text-text-50 group-hover:bg-darkgold cursor-pointer"> */}
//                 {/* <button className=" px-5 py-2 bg-gold/70 bg-opacity-80 backdrop-blur-sm z-30  rounded-lg group-hover:text-text-50 shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-darkgold/70  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 group-hover:shadow-[0px_4px_32px_0_rgba(42,37,9,.70)]  text-text-900   cursor-pointer ">
//                    Contact Me
//                 </button> */}
//                 <button className="px-5 py-2 z-30 font-semibold  rounded-lg group-hover:text-text-50 shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-darkgold  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-lg after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 group-hover:shadow-[0px_4px_32px_0_rgba(42,37,9,.70)] text-text-900 cursor-pointer">
//                   <div className="absolute inset-0 bg-gold/70 bg-opacity-80 backdrop-blur-sm"></div>
//                   <span className="relative z-10">Contact Me</span>
//                 </button>

//               </div>
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Mobile Hamburger Button */}
//       <button
//         onClick={() => setMobileMenuOpen((open) => !open)}
//         className="fixed bottom-16 right-3 z-50 md:hidden shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] bg-gold/70 bg-opacity-80 backdrop-blur-sm rounded-full p-3  text-text-900 hover:text-text-800 transition-colors duration-300"
//         aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
//       >
//         {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
//       </button>

//       {/* Mobile Menu Overlay -- Drawer */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             key="drawer"
//             initial={{ opacity: 0, scale: 0.2, x: 100,  y: 100 }}
//             animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
//             exit={{ opacity: 0, scale: 0.2, x: 100, y: 100 }}
//             transition={{
//               type: "spring",
//               stiffness: 300,
//               damping: 25
//             }}
//             className="fixed md:hidden bottom-20 right-6 items-center flex flex-col
//             text-lg font-semibold w-48"
//           >
//             <svg className="absolute inset-0 w-full h-full">
//               <defs>
//                 <clipPath id="right__bottom__corner__menu" clipPathUnits="objectBoundingBox">
//                 <path
//                   d="
//                     M 0.05 0                    
//                     L 0.95 0                    
//                     A 0.05 0.05 0 0 1 1 0.05    

//                     L 1 0.73                    
                    
//                     A 0.05 0.05 0 0 1 0.95 0.78
                    
//                     A 0.18 0.18 0 0 0 0.76 0.95 

//                     A 0.05 0.05 0 0 1 0.71 1

//                     L 0.05 1                 
//                     A 0.05 0.05 0 0 1 0 0.95    

//                     L 0 0.05                    
//                     A 0.05 0.05 0 0 1 0.05 0    
//                     Z                           
//                   "
//                 />
//                 </clipPath>
//               </defs>
//               <foreignObject width="100%" height="100%" clipPath="url(#right__bottom__corner__menu)">
//                 <div className="w-full h-full md:hidden z-60  shadow-[0px_4px_32px_0_rgba(211,187,54,.90)]  bg-gold/70 bg-opacity-80 backdrop-blur-sm drop-shadow-lg" />
//               </foreignObject>
//             </svg>
//             <div className="flex flex-col items-center space-y-6 text-lg font-semibold p-6">
//               {links.map((section) => (
//                 <a
//                   key={section}
//                   href={`#${section.toLowerCase()}`}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="hover:text-text-800 transition-colors duration-300 z-10 text-text-900"
//                 >
//                   {section}
//                   <span className="block h-0.5 bg-text-900 scale-x-75 items-center justify-center transition-transform duration-300 group-hover:scale-x-100"></span>
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//     </>
//   );
// }

// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "motion/react";
// // import { HiMenu, HiX } from "react-icons/hi";

// // const Navbar = () => {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const links = ["About", "Skills", "Projects"];

// //   return (
// //     <>
// //       {/* Desktop Navbar */}
// //       <nav className="h-full w-full px-6 py-1 flex justify-between items-center bg-bg100/50 backdrop-blur-sm bg-opacity-80 rounded-b-xl shadow-md md:rounded-2xl  mx-auto z-20">
// //         <a
// //           href="#hero"
// //           className="text-text-900 text-lg md:text-xl font-semibold transition-transform duration-300 hover:scale-105"
// //         >
// //           Ace Taiwo
// //         </a>

// //         <ul className="flex space-x-8 items-center">
// //           {links.map((section) => (
// //             <li key={section} className="group hidden md:flex">
// //               <a
// //                 href={`#${section.toLowerCase()}`}
// //                 className="font-medium text-text-900 hover:text-text-800 transition-colors duration-300 relative"
// //               >
// //                 {section}
// //                 <span className="block h-0.5 bg-text-800 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
// //               </a>
// //             </li>
// //           ))}

// //           <li className="ml-8">
// //             <a href="#contact" className="group relative overflow-hidden">
// //               <button className="px-5 py-2 z-30 font-semibold rounded-lg shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-darkgold after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-lg after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 group-hover:shadow-[0px_4px_32px_0_rgba(42,37,9,.70)] text-text-900 cursor-pointer">
// //                 <div className="absolute inset-0 bg-gold/70 bg-opacity-80 backdrop-blur-sm"></div>
// //                 <span className="relative z-10">Contact Me</span>
// //               </button>
// //             </a>
// //           </li>
// //         </ul>
// //       </nav>

// //       {/* Mobile Hamburger Button */}
// //       <button
// //         onClick={() => setMobileMenuOpen((open) => !open)}
// //         className="fixed bottom-16 right-3 z-50 md:hidden shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] bg-gold/70 bg-opacity-80 backdrop-blur-sm rounded-full p-3 text-text-900 hover:text-text-800 transition-colors duration-300"
// //         aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
// //       >
// //         {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
// //       </button>

// //       {/* Mobile Menu Overlay */}
// //       <AnimatePresence>
// //         {mobileMenuOpen && (
// //           <motion.div
// //             key="drawer"
// //             initial={{ opacity: 0, scale: 0.2, x: 100, y: 100 }}
// //             animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
// //             exit={{ opacity: 0, scale: 0.2, x: 100, y: 100 }}
// //             transition={{
// //               type: "spring",
// //               stiffness: 300,
// //               damping: 25,
// //             }}
// //             className="fixed md:hidden bottom-20 right-6 items-center flex flex-col text-lg font-semibold w-48"
// //           >
// //             <svg className="absolute inset-0 w-full h-full">
// //               <defs>
// //                 <clipPath
// //                   id="right__bottom__corner__menu"
// //                   clipPathUnits="objectBoundingBox"
// //                 >
// //                   <path
// //                     d="
// //                       M 0.05 0                    
// //                       L 0.95 0                    
// //                       A 0.05 0.05 0 0 1 1 0.05    
// //                       L 1 0.73                    
// //                       A 0.05 0.05 0 0 1 0.95 0.78
// //                       A 0.18 0.18 0 0 0 0.76 0.95 
// //                       A 0.05 0.05 0 0 1 0.71 1
// //                       L 0.05 1                 
// //                       A 0.05 0.05 0 0 1 0 0.95    
// //                       L 0 0.05                    
// //                       A 0.05 0.05 0 0 1 0.05 0    
// //                       Z
// //                     "
// //                   />
// //                 </clipPath>
// //               </defs>
// //               <foreignObject
// //                 width="100%"
// //                 height="100%"
// //                 clipPath="url(#right__bottom__corner__menu)"
// //               >
// //                 <div className="w-full h-full md:hidden shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] bg-gold/70 bg-opacity-80 backdrop-blur-sm" />
// //               </foreignObject>
// //             </svg>
// //             <div className="flex flex-col items-center space-y-6 text-lg font-semibold p-6">
// //               {links.map((section) => (
// //                 <a
// //                   key={section}
// //                   href={`#${section.toLowerCase()}`}
// //                   onClick={() => setMobileMenuOpen(false)}
// //                   className="hover:text-text-800 transition-colors duration-300 z-10 text-text-900"
// //                 >
// //                   {section}
// //                   <span className="block h-0.5 bg-text-900 scale-x-75 transition-transform duration-300 group-hover:scale-x-100"></span>
// //                 </a>
// //               ))}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default Navbar;


import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ inNotch = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = ["About Me", "Skills", "Projects"];

  // base classes used in both modes; when inNotch we let parent control sizing
  const baseNavClasses =
    "h-full w-full flex items-center justify-between px-4 inset-0 -z-50 bg-lightpurple/60 backdrop-blur-sm drop-shadow-lg";

  // visual surface for navbar (background + rounding). If it's in the notch,
  // we want rounded top and transparent bottom to sit nicely in the tab.
  const surfaceClasses = inNotch
    ? "h-full w-full  shadow-md rounded-lg overflow-hidden relative"
    : "w-full  backdrop-blur-sm shadow-md px-6 py-3 rounded-b-xl fixed top-0 left-0";

  return (
    <>
      <nav className={surfaceClasses}>
        <div className={baseNavClasses}>
          <a
            href="#hero"
            className="text-text-950 text-base text-[clamp(1.5rem,1vw+0.5rem,2.5rem)] font-semibold transition-transform duration-200 hover:scale-105"
          >
            Ace Taiwo
          </a>

          <ul className="hidden md:flex text-[clamp(1rem,1vw+0.5rem,2rem)] items-center space-x-6">
            {links.map((section) => (
              <li key={section} className="group">
                <a
                  href={`#${section.toLowerCase()}`}
                  className="font-medium text-text-950 hover:text-text-900 relative"
                >
                  {section}
                  <span className="block h-0.5 bg-text-900 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}

            <li>
             <a href="#contact" className="group relative overflow-hidden">
              <button className="px-4 py-2 z-30 font-semibold rounded-lg shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-darkgold after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-lg after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 group-hover:shadow-[0px_4px_32px_0_rgba(42,37,9,.70)] text-text-950 cursor-pointer">
                 <div className="absolute inset-0 bg-gold/70 bg-opacity-80 backdrop-blur-sm rounded-lg"></div>
                 <span className="relative z-10 rounded-lg text-text-950 font-semibold group-hover:text-text-50">
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
        className="fixed bottom-14 right-5 z-50 md:hidden shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] bg-gold/70 backdrop-blur-sm rounded-full p-3  text-text-950 hover:text-text-900 transition-colors duration-300"
        aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
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
            className="fixed md:hidden bottom-20 right-6 items-center flex flex-col text-lg font-semibold w-48"
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
                <div className="w-full h-full md:hidden shadow-[0px_4px_32px_0_rgba(211,187,54,.90)] bg-gold/70 bg-opacity-80 backdrop-blur-sm" />
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
                  <span className="block h-0.5 bg-text-950 scale-x-75 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
