import React from "react";

const Crystal = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0b0b16]">
      <div className="relative w-[100px] h-[140px]">
        {/* FRONT FACE */}
        <div className="absolute w-full h-full bg-gradient-to-br from-yellow-300 to-pink-500
          border border-pink-300 shadow-[0_0_15px_rgba(255,0,255,0.8)]">
        </div>

        {/* TOP FACE */}
        <div className="absolute w-full h-[40px] bg-gradient-to-tr from-yellow-200 to-pink-400
          border border-pink-300 shadow-[0_0_10px_rgba(255,0,255,0.6)]
          transform -translate-y-[40px] skew-x-[45deg] origin-bottom">
        </div>

        {/* SIDE FACE */}
        <div className="absolute w-[40px] h-full bg-gradient-to-b from-pink-400 to-pink-700
          border border-pink-300 shadow-[0_0_10px_rgba(255,0,255,0.6)]
          transform translate-x-[100px] skew-y-[45deg] origin-left">
        </div>

        {/* Glow aura */}
        <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(255,0,255,0.5),transparent_70%)] blur-2xl -z-10"></div>
      </div>
    </div>
  );
};

export default Crystal;
