"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Image from "next/image";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  stars?: number;
  downloads?: string;
  techStack: string[];
}

const Projects = () => {
  const { i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(`/api/projects?lang=${i18n.language}`);
      setProjects(res.data.projects);
    };

    fetchProjects();
  }, [i18n.language]);

  return (
    <section className="w-full pb-10">
      <h2 className="text-3xl font-bold text-white mb-10">{t("projects")}</h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-start gap-6 bg-[#112240] p-6 rounded-lg"
          >
            <div className="relative w-full md:w-40 h-32">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex-1">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-white flex items-center gap-2 hover:text-teal-300"
              >
                {project.title} <FaExternalLinkAlt className="text-sm" />
              </a>
              <p className="text-gray-400 mt-2">{project.description}</p>

              {project.downloads && (
                <p className="text-gray-400 mt-2 flex items-center gap-2">
                  <FaDownload className="text-teal-400" /> {project.downloads}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-muteBg text-teal-300 px-3 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/archive"
          className="text-teal-300 flex items-center justify-center gap-2 text-lg hover:underline"
        >
          {t("view_full_project_archive")}
        </a>
      </div>
    </section>
  );
};

export default Projects;
