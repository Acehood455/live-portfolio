"use client";
import { motion } from "framer-motion";

const WobblySphere = () => {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 md:-translate-y-[20%] w-[120%] h-[120%] md:w-[125%] md:h-[130%] -z-10 opacity-90"
      >
        <motion.path
          fill="url(#gradient)"
          transform="translate(100 100)"
          animate={{
            d: [
              "M42,-60C54,-51,63,-40,68,-27C74,-14,76,1,70,16C64,31,50,47,33,57C15,67,-6,71,-25,65C-45,59,-63,43,-71,22C-78,1,-75,-24,-61,-41C-48,-58,-24,-68,-3,-67C18,-66,36,-55,42,-60Z",
              "M34,-57C45,-49,56,-40,64,-27C72,-13,76,4,69,20C62,36,45,52,26,62C7,72,-15,75,-33,67C-51,59,-66,41,-72,19C-78,-3,-74,-29,-60,-45C-46,-61,-23,-66,-3,-64C17,-62,34,-53,34,-57Z",
              "M40,-60C52,-52,64,-41,70,-27C76,-13,76,4,68,19C60,34,44,47,27,55C10,63,-9,66,-28,61C-47,56,-66,42,-73,23C-80,4,-75,-20,-62,-38C-49,-56,-28,-68,-6,-69C16,-70,32,-60,40,-60Z",
              "M42,-60C54,-51,63,-40,68,-27C74,-14,76,1,70,16C64,31,50,47,33,57C15,67,-6,71,-25,65C-45,59,-63,43,-71,22C-78,1,-75,-24,-61,-41C-48,-58,-24,-68,-3,-67C18,-66,36,-55,42,-60Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#df99ff" />
            <stop offset="100%" stopColor="#D3BB36" />
          </linearGradient>
        </defs>
      </motion.svg>
    );
    
  };
  
export default WobblySphere;
