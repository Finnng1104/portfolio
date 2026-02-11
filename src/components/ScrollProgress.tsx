"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = (document.scrollingElement ||
      document.documentElement) as HTMLElement;

    const update = () => {
      const max = root.scrollHeight - root.clientHeight;
      const pct = max > 0 ? root.scrollTop / max : 0; // 0..1
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(
          1,
          Math.max(0, pct)
        )})`;
      }
    };

    // chạy ngay lần đầu
    update();

    const onScroll = () => requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none"
      aria-hidden
    >
      <div className="relative h-full">
        {/* nền mờ (đặt dưới để không che bar) */}
        <div className="absolute inset-0 bg-black/10" />
        {/* thanh tiến trình dùng transform để tránh reflow */}
        <div
          ref={barRef}
          className="h-full origin-left will-change-transform bg-gradient-to-r from-indigo-400 to-cyan-400 transition-transform duration-75"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}
