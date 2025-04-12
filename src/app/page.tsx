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
    <main className="grid grid-cols-5 min-h-screen w-full">
      <div className="col-span-2">
        <Sidebar activeSection={activeSection} />
      </div>

      <div className="col-span-3 px-12 pt-24 flex flex-col gap-12">
        <section id="about" className="scroll-mt-24"><About /></section>
        <section id="experience" className="scroll-mt-24"><ExperienceSection /></section>
        <section id="projects"><Projects /></section>
      </div>
    </main>
  );
};

export default Home;