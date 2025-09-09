import React, { useEffect, useRef, useState } from "react";

export default function ScrollAwareWrapper({ children, inactiveDelay = 10000 }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const resetInactivityTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setVisible(false);
      }, inactiveDelay);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
      resetInactivityTimer();
    };

    const handleActivity = () => {
      setVisible(true);
      resetInactivityTimer();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    resetInactivityTimer();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [lastScrollY, inactiveDelay]);

  return (
    <div
      className={`transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
    >
      {children}
    </div>
  );
}
