"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaStar, FaDownload } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import Image from "next/image";
import axios from "axios";

interface Project {
  id: number;
  image: string;
  link: string;
  stars?: number;
  downloads?: string;
  techStack: string[];
  i18n: {
    [lang: string]: {
      title: string;
      description: string;
    };
  };
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { i18n, t } = useTranslation();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`/api/projects?lang=${i18n.language}`);
        const found = res.data.projects.find((p: Project) => p.id === Number(id));
        setProject(found || null);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setProject(null);
      }
    };

    if (id) fetchProject();
  }, [id, i18n.language]);

  if (!project) return <div className="text-center text-gray-400 py-24">Project not found</div>;

  const content = project.i18n[i18n.language] || project.i18n.en;

  return (
    <section className="max-w-4xl mx-auto py-24 px-4">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => router.push("/")}
          className="text-teal-400 flex items-center gap-2 hover:underline"
        >
          <IoArrowBackOutline className="text-lg" />
          { "Back to Home"}
        </button>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-6">{content.title}</h1>

      {/* Image */}
      <div className="relative w-full h-64 mb-6">
        <Image
          src={project.image}
          alt={content.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-gray-300 text-lg mb-4">{content.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-6">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-muteBg text-teal-300 px-4 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Stats & Link */}
      <div className="flex flex-wrap gap-6 text-gray-400">
        {project.stars && (
          <span className="flex items-center gap-2">
            <FaStar className="text-yellow-400" /> {project.stars} stars
          </span>
        )}
        {project.downloads && (
          <span className="flex items-center gap-2">
            <FaDownload className="text-teal-400" /> {project.downloads}
          </span>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-300"
          >
            {t("visit") || "Visit"} <FaExternalLinkAlt className="text-sm" />
          </a>
        )}
      </div>
    </section>
  );
}