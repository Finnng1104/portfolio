import { NextResponse } from "next/server";
import data from "@/data/experience.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = (searchParams.get("lang") || "en") as "en" | "vi";

  const experiences = data.experiences.map((exp) => ({
    year: exp.year,
    company: exp.company,
    link: exp.link,
    position: exp.i18n[lang]?.position || exp.i18n.en.position,
    description: exp.i18n[lang]?.description || exp.i18n.en.description,
    techStack: exp.techStack || [],
  }));

  return NextResponse.json({ experiences });
}
