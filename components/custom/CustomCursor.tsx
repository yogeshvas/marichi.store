"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use refs to persist values across renders without re-running effects
  const mousePos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);

  // Sync refs with state
  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    isClickingRef.current = isClicking;
  }, [isClicking]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      setIsVisible(true);

      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(${isClickingRef.current ? 0.8 : isHoveringRef.current ? 1.5 : 1})`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.closest("[data-cursor-hover]") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(!!isInteractive);
    };

    const animate = () => {
      if (trail) {
        const targetX = mousePos.current.x;
        const targetY = mousePos.current.y;

        trailPos.current.x += (targetX - trailPos.current.x) * 0.15;
        trailPos.current.y += (targetY - trailPos.current.y) * 0.15;

        trail.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []); // Run once, depend on refs for mutable values

  // Hide on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Smooth trailing circle (outer ring) */}
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? "50px" : "36px",
          height: isHovering ? "50px" : "36px",
          borderRadius: "50%",
          border: `2px solid ${isHovering ? "oklch(66.166% 0.19307 24.035)" : "rgba(255, 255, 255, 0.5)"}`,
          pointerEvents: "none",
          zIndex: 99999,
          // Removed width/height/border-color transitions from JS style object to avoid fighting with the animation loop if we were animating them, 
          // but here we are only animating transform in the loop.
          // Keeping transitions for size/color changes.
          transition: "width 0.3s cubic-bezier(0.23, 1, 0.32, 1), height 0.3s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease, opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
          mixBlendMode: "difference",
        }}
      />

      {/* Main dot cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? "8px" : "6px",
          height: isHovering ? "8px" : "6px",
          borderRadius: "50%",
          backgroundColor: isHovering ? "oklch(66.166% 0.19307 24.035)" : "#fff",
          pointerEvents: "none",
          zIndex: 100000,
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.3s ease, opacity 0.3s ease",
          // Removed transform transition from CSS as it's handled by JS for instant follow
          opacity: isVisible ? 1 : 0,
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
