"use client";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="flex flex-col justify-center">
      <div className="max-w-3xl text-gray-400 text-lg leading-relaxed space-y-6">
        <p>{t("about_section.description_1")}</p>
        <p>{t("about_section.description_2")}</p>
        <p>{t("about_section.description_3")}</p>
        <p>{t("about_section.description_4")}</p>
      </div>
    </section>
  );
};

export default About;
