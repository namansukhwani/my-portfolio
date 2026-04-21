import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      return isTouch || isSmallScreen;
    };

    const handleResize = () => {
      if (checkMobile()) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    if (checkMobile()) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    window.addEventListener("resize", handleResize);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, .glass-card");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", handleResize);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: hovered ? 2 : 1,
          backgroundColor: hovered ? "rgba(0, 255, 255, 0.1)" : "rgba(0, 255, 255, 0)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: "-50%",
          y: "-50%",
        }}
      />
      
      {/* Terminal Crosshair Lines (Hidden when hovering for cleaner look) */}
      {!hovered && (
        <motion.div
          className="fixed top-0 left-0 w-4 h-[1px] bg-primary/30 pointer-events-none z-[9999]"
          style={{
            translateX: cursorX,
            translateY: cursorY,
            x: "-50%",
            y: "-50%",
          }}
        />
      )}
      {!hovered && (
        <motion.div
          className="fixed top-0 left-0 w-[1px] h-4 bg-primary/30 pointer-events-none z-[9999]"
          style={{
            translateX: cursorX,
            translateY: cursorY,
            x: "-50%",
            y: "-50%",
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
