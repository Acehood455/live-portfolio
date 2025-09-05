// src/components/3dCard.jsx
import React, { createContext, useState, useContext } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

// Context to track hover state
export const MouseContext = createContext({ x: 0, y: 0 });

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MouseEnterContext.Provider value={[isHovered, setIsHovered]}>
      <div
        className={`relative ${className}`}
        style={{ perspective: "1000px" }}
      >
        {children}
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useContext(MouseEnterContext);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    animate(x, 0, { type: "spring", stiffness: 120, damping: 15 });
    animate(y, 0, { type: "spring", stiffness: 120, damping: 15 });
  };

  return (
    <motion.div
      className={`relative w-full h-full rounded-2xl bg-cardColor2 ${className}`}
      style={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.05 : 1,
        transitionDuration: 500,
        boxShadow: isHovered
          ? "4px 4px 10px rgba(223,153,255,0.25)"   // brighter glow on hover
          : "2px 2px 5px rgba(223,153,255,0.15)", // subtle glow at rest
        transformStyle: "preserve-3d",
      }}
      
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export const CardItem = ({ children, className = "", translateZ = 0, as = "div" }) => {
  const Component = as;
  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}