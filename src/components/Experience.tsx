"use client";

import { FC, useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import axios from "axios";

interface ExperienceItem {
  year: string;
  company: string;
  link: string;
  position: string;
  description: string;
  technologies: string[];
}

const ExperienceSection: FC = () => {
  const { i18n } = useTranslation();
  const {t} = useTranslation();
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get("/api/experiences?lang=" + i18n.language);
        setExperiences(res.data.experiences);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setExperiences([]);
      }
    };

    fetchExperiences();
  }, [i18n.language]);

  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold text-white mb-8">
      {t("experience")}
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <p className="text-sm text-gray-400 font-semibold">{exp.year}</p>

            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-white">
                {exp.position || "No title"} · {exp.company}
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

            <p className="text-gray-300 mt-2">
              {exp.description || "No description"}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {Array.isArray(exp.technologies) &&
                exp.technologies.map((tech, idx) => (
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