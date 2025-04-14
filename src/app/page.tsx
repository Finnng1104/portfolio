"use client";
import { useEffect, useState } from "react";
import About from "@/components/About";
import ExperienceSection from "@/components/Experience";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibleArea = 0;
        let mostVisibleSection = activeSection;

        entries.forEach((entry) => {
          const rect = entry.target.getBoundingClientRect();
          const visibleArea = rect.height * (entry.intersectionRatio || 0);

          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection !== activeSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.3, 0.6, 0.9],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeSection]);

  return (
    <main className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Sidebar: ẩn trên mobile */}
      <div className="hidden md:block md:w-2/5 lg:w-2/6 xl:w-1/4">
        <Sidebar activeSection={activeSection} />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/5 lg:w-4/6 xl:w-3/4 px-4 md:px-8 lg:px-12 pt-24 flex flex-col gap-12">
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="experience" className="scroll-mt-24">
          <ExperienceSection />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </main>
  );
};

export default Home;