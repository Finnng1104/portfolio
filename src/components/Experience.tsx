"use client";
import { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    year: "2024 — PRESENT",
    position: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
    link: "https://klaviyo.com",
  },
  {
    year: "2018 — 2024",
    position: "Lead Engineer",
    company: "Upstatement",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
    link: "https://upstatement.com",
  },
  {
    year: "JULY — DEC 2017",
    position: "UI Engineer Co-op",
    company: "Apple",
    description:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    technologies: ["MusicKit.js", "9to5Mac", "The Verge", "Ember", "SCSS"],
    link: "https://apple.com",
  },
];

const ExperienceSection: FC = () => {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <p className="text-sm text-gray-400 font-semibold">{exp.year}</p>

            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-white">
                {exp.position} · {exp.company}
              </h3>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-all"
              >
                <FaExternalLinkAlt className="inline-block text-xs" />
              </a>
            </div>

            <p className="text-gray-300 mt-2">{exp.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-muteBg text-teal-300 px-3 py-1 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;