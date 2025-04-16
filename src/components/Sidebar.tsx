"use client";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
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
    { href: "https://gitlab.com/Finnng1104", icon: <FaGithub /> },
    { href: "https://www.linkedin.com/in/finnng1104/", icon: <FaLinkedin /> },
    { href: "https://www.facebook.com/Finnng1104/", icon: <FaFacebook /> }
  ];

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="w-full h-[300px] xl:h-screen  sticky top-0 flex flex-col justify-between py-24">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Nguyen Thanh Tien <br /> (Finnng)
        </h1>
      </div>

      <nav className="mt-10 hidden xl:block">
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