"use client";
import { FC } from "react";
import { projectsData } from "@/data/projectsData";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

const Archive: FC = () => {
  return (
    <section className="w-ful mt-20">
      <div className="mb-8 flex items-center space-x-2">
        <IoArrowBackOutline className="text-gray-400 text-xl" />
        <Link href="/" className="text-teal-400 hover:underline text-lg">
          Nguyen Thanh Tien
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-white mb-8">All Projects</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-gray-400 text-left text-sm text-white border-b border-gray-700">
              <th className="py-3">Year</th>
              <th className="py-3">Project</th>
              <th className="py-3">Made at</th>
              <th className="py-3">Built with</th>
              <th className="py-3">Link</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <td className="py-4 pr-4 text-gray-400">{project.year}</td>
                <td className="py-4 text-white font-semibold">{project.name}</td>
                <td className="py-4 pr-4 text-gray-400">{project.company}</td>
                <td className="py-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-300 flex items-center gap-1"
                  >
                    {project.link !== "#" ? (
                      <>
                        {project.link.replace("https://", "")}
                        <FaExternalLinkAlt className="text-xs" />
                      </>
                    ) : (
                      "N/A"
                    )}
                  </a>
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