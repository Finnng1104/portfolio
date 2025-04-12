"use client";
import { FC } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaStar, FaDownload } from "react-icons/fa";

interface Project {
  image: string;
  title: string;
  description: string;
  stars?: number;
  downloads?: string;
  techStack: string[];
  link: string;
}

const projects: Project[] = [
  {
    image: "/images/spotify-app.png",
    title: "Build a Spotify Connected App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    techStack: ["React", "Express", "Spotify API", "Heroku"],
    link: "https://example.com/spotify-app",
  },
  {
    image: "/images/spotify-profile.png",
    title: "Spotify Profile",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information.",
    stars: 677,
    techStack: ["React", "Express", "Spotify API", "Heroku"],
    link: "https://example.com/spotify-profile",
  },
  {
    image: "/images/halcyon-theme.png",
    title: "Halcyon Theme",
    description:
      "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
    downloads: "100k+ Installs",
    techStack: [],
    link: "https://example.com/halcyon-theme",
  },
  {
    image: "/images/project/country-Api.png",
    title: "Country API",
    description:
      "Ứng dụng giúp người dùng tra cứu thông tin về các quốc gia trên thế giới. Dành cho nhà phát triển, dự án giúp thực hành gọi API, quản lý dữ liệu và thao tác với tìm kiếm, lọc dữ liệu.",
    stars: 7780,
    techStack: ["Gatsby", "Styled Components", "Netlify"],
    link: "https://country-api-mu-nine.vercel.app/",
  }
];

const Projects: FC = () => {
  return (
    <section className="w-full py-24">
      <h2 className="text-3xl font-bold text-white">Projects</h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
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

              {project.stars && (
                <p className="text-gray-400 mt-2 flex items-center gap-2">
                  <FaStar className="text-yellow-400" /> {project.stars}
                </p>
              )}
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

      <div className="mt-10">
        <a
          href="/archive"
          className="text-teal-300 flex items-center gap-2 text-lg hover:underline"
        >
          View Full Project Archive →
        </a>
      </div>
    </section>
  );
};

export default Projects;