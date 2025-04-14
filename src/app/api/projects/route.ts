import { NextResponse } from "next/server";
import data from "@/data/project.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") || "en";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "4");

  const start = (page - 1) * limit;
  const end = start + limit;
  const langKey = lang as "en" | "vi";

  const projects = data.projects.slice(start, end).map((p) => ({
    
    id: p.id,
    image: p.image,
    link: p.link,
    stars: p.stars,
    techStack: p.techStack,
    title: p.i18n[langKey]?.title || p.i18n.en.title,
    description: p.i18n[langKey]?.description || p.i18n.en.description,
  }));

  return NextResponse.json({ projects, total: data.projects.length });
}