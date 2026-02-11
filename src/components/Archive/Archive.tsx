"use client";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

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

const Archive: FC = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const lang = i18n.language || "en"; 
      const res = await axios.get(`/api/projects?lang=${lang}`);
      setProjects(res.data.projects);
    };
  
    if (i18n.language) {
      fetchProjects();
    }
  }, [i18n.language]);

  return (
    <section className="w-full mt-20">
      <div className="mb-8 flex items-center space-x-2">
        <IoArrowBackOutline className="text-gray-400 text-xl" />
        <Link href="/" className="text-teal-400 hover:underline text-lg">
          Nguyen Thanh Tien
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-white mb-8">{t("all_projects")}</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-sm text-white border-b border-gray-700">
              <th className="py-3">ID</th>
              <th className="py-3">Project</th>
              <th className="py-3">Tech Stack</th>
              <th className="py-3">Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <td className="py-4 pr-4 text-gray-400">{project.id}</td>
                <td className="py-4 text-white font-semibold">{project.title}</td>
                <td className="py-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-muteBg text-teal-300 px-3 py-1 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4">
                  {project.link !== "#" && project.link !== "" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-300 flex items-center gap-1"
                    >
                      {project.link.replace(/^https?:\/\//, "")}
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Archive;