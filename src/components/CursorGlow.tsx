import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const lastMove = useRef(performance.now());
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      lastMove.current = performance.now();
      if (!moving) setMoving(true);
    };
    window.addEventListener("mousemove", handleMove);

    let raf = 0;
    const tick = () => {
      // smooth lerp
      dotPos.current.x += (target.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (target.current.y - dotPos.current.y) * 0.35;
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // detect idle
      if (performance.now() - lastMove.current > 120 && moving) {
        setMoving(false);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, [moving]);

  return (
    <>
      {/* center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full transition-[width,height,background] duration-300 ease-out"
        style={{
          width: moving ? 8 : 6,
          height: moving ? 8 : 6,
          background: "hsl(330 100% 70%)",
          boxShadow: "0 0 12px hsl(330 100% 70% / 0.9)",
        }}
      />
      {/* outer ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full border transition-[width,height,opacity,border-color] duration-300 ease-out"
        style={{
          width: moving ? 44 : 0,
          height: moving ? 44 : 0,
          borderColor: "hsl(330 85% 65% / 0.7)",
          boxShadow: "0 0 24px hsl(330 85% 65% / 0.35), inset 0 0 12px hsl(330 85% 65% / 0.2)",
          opacity: moving ? 1 : 0,
        }}
      />
    </>
  );
};

export default CursorGlow;
