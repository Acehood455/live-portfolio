// import React from 'react'
// import { TbNorthStar } from 'react-icons/tb'
// import clsx from 'clsx'

// // JIT-safe maps
// const bgMap = {
//   body: 'bg-body',
//   cardColor: 'bg-cardColor picture',
// }
// const beforeBgMap = {
//   body: 'before:bg-body',
//   cardColor: 'before:bg-cardColor',
// }
// const afterBgMap = {
//   body: 'after:bg-body',
//   cardColor: 'after:bg-cardColor',
// }

// const roundedMap = {
//   none: 'rounded-b-none',
//   sm: 'rounded-b-sm',
//   md: 'rounded-b-md',
//   lg: 'rounded-b-lg',
//   xl: 'rounded-b-xl',
//   '2xl': 'rounded-b-2xl',
//   '3xl': 'rounded-b-3xl',
//   full: 'rounded-b-full',
// }


// const SectionTitle = ({ title, outerColor, innerColor, rounded, hasRoundDown }) => {
//   return (
//     <div className="w-full">
//       <div
//         className={clsx(
//           `relative p-12 md:p-6`,
//           roundedMap[rounded],
//           bgMap[outerColor],
//           hasRoundDown &&
//             clsx(
//               `before:content-[''] before:absolute before:-bottom-4 before:left-0 before:w-4 before:h-4`,
//               beforeBgMap[outerColor],
//               `after:content-[''] after:absolute after:-bottom-4 after:right-0 after:w-4 after:h-4 after:rounded-tr-2xl`,
//               afterBgMap[innerColor],
//             )
//         )}
//       >
//         {hasRoundDown && (
//           <>
//             <div
//               className={clsx(
//                 `before:content-[''] before:absolute before:-bottom-4 before:left-0 before:w-4 before:h-4 before:rounded-tl-2xl`,
//                 beforeBgMap[innerColor]
//               )}
//             />
//             <div
//               className={clsx(
//                 `after:content-[''] after:absolute after:-bottom-4 after:right-0 after:w-4 after:h-4`,
//                 afterBgMap[outerColor] 
//               )}
//             />
//           </>
//         )}

//         <div className="absolute bottom-0 left-6 md:left-7">
//           <div
//             className={clsx(
//               `before:content-[''] before:absolute before:bottom-0 before:-left-2 before:w-2 before:h-2`,
//               beforeBgMap[innerColor]
//             )}
//           />
//           <div
//             className={clsx(
//               `after:content-[''] after:absolute after:bottom-0 after:-right-2 after:w-2 after:h-2`,
//               afterBgMap[innerColor]
//             )}
//           />
//           <span
//             className={clsx(
//               `relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-xl`,
//               bgMap[innerColor],
//               `before:content-[''] before:absolute before:bottom-0 before:-left-2 before:w-2 before:h-2 before:rounded-br-xl`,
//               beforeBgMap[outerColor],
//               `after:content-[''] after:absolute after:bottom-0 after:-right-2 after:w-2 after:h-2 after:rounded-bl-xl`,
//               afterBgMap[outerColor],
//             )}
//           >
//             {/* The 2 masks for noise effect */}
//             {/* Left noise corner */}
//             <div className="absolute h-2 w-2 bottom-0 -left-2 rounded-br-xl overflow-hidden ">
//               <div className="pictureElements"></div>
//             </div>

//             {/* Right noise corner */}
//             <div className="bg-white absolute h-8 w-8 bottom-0 -right-8 rounded-bl-xl overflow-hidden z-[999]">
//               <div className="pictureElements"></div>
//             </div>


//             <div className="flex items-center gap-2">
//               <TbNorthStar size={17} className="text-purple2" />
//               <h1 className="uppercase tracking-widest text-xs md:text-sm font-medium text-text ">
//                 {title}
//               </h1>
//             </div>
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SectionTitle


import React from "react";
import { TbNorthStar } from "react-icons/tb";
import clsx from "clsx";

// JIT-safe maps
const bgMap = {
  body: "bg-body",
  cardColor: "bg-cardColor",
};

const roundedMap = {
  none: "rounded-b-none",
  sm: "rounded-b-sm",
  md: "rounded-b-md",
  lg: "rounded-b-lg",
  xl: "rounded-b-xl",
  "2xl": "rounded-b-2xl",
  "3xl": "rounded-b-3xl",
  full: "rounded-b-full",
};

const SectionTitle = ({ title, outerColor, innerColor, rounded, hasRoundDown }) => {
  return (
    <div className="w-full">
      <div
        className={clsx(
          "relative p-12 md:p-6",
          roundedMap[rounded],
          bgMap[outerColor],
          outerColor === "cardColor" && "picture"
        )}
      >
        {/* Extra round down cut-outs if needed */}
        {hasRoundDown && (
          <>
            {/* Bottom-left cut */}
            <div
              className={clsx(
                "bg-white absolute -bottom-4 left-0 w-4 h-4 rounded-tl-2xl",
                // bgMap[innerColor]
              )}
            />
            <div
              className={clsx(
                "bg-white absolute -bottom-4 left-0 w-4 h-4 rounded-tl-2xl",
                // bgMap[innerColor]
              )}
            />
            {/* Bottom-right cut */}
            <div
              className={clsx(
                "bg-white absolute -bottom-4 right-0 w-4 h-4",
                // bgMap[outerColor]
              )}
            />
          </>
        )}

        {/* Title tag */}
        <div className="absolute bottom-0 left-6 md:left-7">
          {/* Left edge filler */}
          <div
            className={clsx(
              "absolute bottom-0 -left-2 w-2 h-2",
              bgMap[innerColor]
            )}
          >
            {innerColor === "cardColor" && (
                  <div className="pictureElements" />
                )}
          </div>
          {outerColor === "body" && (
            <div
              className={clsx(
                "absolute bottom-0 -left-2 w-2 h-2 rounded-br-xl",
                bgMap[outerColor]
              )}
            />
          )}

          {/* Right edge filler */}
          <div
            className={clsx(
              "absolute bottom-0 -right-2 w-2 h-2",
              bgMap[innerColor]
            )}
          >
            {innerColor === "cardColor" && (
                  <div className="pictureElements" />
                )}
          </div>
          {outerColor === "body" && (
            <div
              className={clsx(
                "absolute bottom-0 -right-2 w-2 h-2 rounded-bl-xl",
                bgMap[outerColor]
              )}
            />
          )}

          <span
            className={clsx(
              "relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-xl",
              bgMap[innerColor],
              innerColor === "cardColor" && "picture"
            )}
          >
            {/* Left noise corner */}
            <div className={clsx("absolute h-2 w-2 bottom-0 -left-2 rounded-br-xl overflow-hidden",
              bgMap[outerColor])}
              >
              {outerColor === "cardColor" && (
                  <div className="pictureElements" />
                )}
            </div>

            {/* Right noise corner */}
            <div className={clsx("absolute h-2 w-2 bottom-0 -right-2 rounded-bl-xl overflow-hidden",
              bgMap[outerColor])}
              >
                {outerColor === "cardColor" && (
                  <div className="pictureElements" />
                )}
            </div>


            {/* Content */}
            <div className="flex items-center gap-2 relative z-10">
              <TbNorthStar size={17} className="text-purple2" />
              <h1 className="uppercase tracking-widest text-xs md:text-sm font-medium text-text">
                {title}
              </h1>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
