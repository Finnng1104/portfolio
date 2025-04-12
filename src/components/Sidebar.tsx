"use client";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { BsBook } from "react-icons/bs";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface SidebarProps {
  activeSection: string;
}

const Sidebar: FC<SidebarProps> = ({ activeSection }) => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log("✅ Sidebar Updated - Active Section:", activeSection);
  }, [activeSection]);

  const menuItems = [
    { id: "about", label: t("about") },
    { id: "experience", label: t("experience") },
    { id: "projects", label: t("projects") },
  ];

  const socialLinks = [
    { href: "https://github.com/", icon: <FaGithub /> },
    { href: "https://linkedin.com/", icon: <FaLinkedin /> },
    { href: "https://codepen.io/", icon: <SiCodepen /> },
    { href: "https://instagram.com/", icon: <FaInstagram /> },
    { href: "https://goodreads.com/", icon: <BsBook /> },
  ];

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="w-full h-screen sticky top-0 flex flex-col justify-between py-24">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Nguyen Thanh Tien <br /> (Finnng)
        </h1>
      </div>

      <nav className="mt-10">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleScrollToSection(item.id)}
                className={`relative uppercase text-sm font-bold transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-gray-500"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-12 flex flex-col items-start">
        <LanguageSwitcher />
        <div className="flex space-x-6 mt-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mutedText hover:text-white transition-colors text-2xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;