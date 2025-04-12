"use client";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded bg-[#1E293B] hover:bg-[#334155] text-gray-200 text-sm flex items-center gap-2 transition-all"
      >
        {i18n.language === "en" ? "🇺🇸 English" : "🇻🇳 Tiếng Việt"}
        <IoIosArrowDown
          className={`text-lg transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-[#1E293B] text-gray-200 rounded-md shadow-lg overflow-hidden border border-[#334155]">
          <button
            onClick={() => changeLanguage("en")}
            className="block w-full px-4 py-2 text-left hover:bg-[#334155] transition-all"
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => changeLanguage("vi")}
            className="block w-full px-4 py-2 text-left hover:bg-[#334155] transition-all"
          >
            🇻🇳 Tiếng Việt
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;