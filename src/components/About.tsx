"use client";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="flex flex-col justify-center">
      <div className="max-w-3xl text-gray-400 text-lg leading-relaxed">
        <p>{t("about_section.description_1")}</p>

        <h3 className="text-xl text-white font-bold mt-6">{t("about_section.short_term_goals.title")}</h3>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>{t("about_section.short_term_goals.goal_1")}</li>
          <li>{t("about_section.short_term_goals.goal_2")}</li>
          <li>{t("about_section.short_term_goals.goal_3")}</li>
        </ul>

        <h3 className="text-xl text-white font-bold mt-6">{t("about_section.long_term_goals.title")}</h3>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>{t("about_section.long_term_goals.goal_1")}</li>
          <li>{t("about_section.long_term_goals.goal_2")}</li>
          <li>{t("about_section.long_term_goals.goal_3")}</li>
        </ul>
      </div>
    </section>
  );
};

export default About;