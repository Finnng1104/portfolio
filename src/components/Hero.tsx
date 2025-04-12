"use client";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-white">{t("hero_title")}</h1>
      <p className="mt-4 text-gray-400">{t("hero_description")}</p>
    </section>
  );
};

export default Hero;