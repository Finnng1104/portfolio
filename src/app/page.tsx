// Home.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import About from "@/components/About";
import ExperienceSection from "@/components/Experience";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  const [activeSection, setActiveSection] = useState("about");
  const activeRef = useRef(activeSection);
  activeRef.current = activeSection;

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );

    // Tính chiều cao hiển thị thực tế trong viewport
    const visibleHeight = (rect: DOMRect) => {
      const vh = window.innerHeight;
      const top = Math.max(0, rect.top);
      const bottom = Math.min(vh, rect.bottom);
      return Math.max(0, bottom - top);
    };

    const recompute = () => {
      let max = -1;
      let mostVisibleId = activeRef.current;

      sections.forEach((sec) => {
        const vh = visibleHeight(sec.getBoundingClientRect());
        if (vh > max) {
          max = vh;
          mostVisibleId = sec.id;
        }
      });

      if (mostVisibleId !== activeRef.current) {
        setActiveSection(mostVisibleId);
      }
    };

    const observer = new IntersectionObserver(
      () => {
        // Chỉ tính lại activeSection, không thêm class visible
        recompute();
      },
      {
        rootMargin: "0px 0px -40% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    recompute();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="grid grid-cols-1 xl:grid-cols-5 min-h-screen w-full">
      <div className="block px-4 xl:px-0 xl:col-span-2">
        <Sidebar activeSection={activeSection} />
      </div>

      <div className="col-span-1 xl:col-span-3 px-4 sm:px-6 xl:px-12 pt-24 flex flex-col gap-12">
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="experience" className="scroll-mt-24">
          <ExperienceSection />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
      </div>
    </main>
  );
};

export default Home;
