"use client";
import "./globals.css";
import "@/config/i18n";
import CursorEffect from "@/components/CursorEffect";
import ScrollProgress from "@/components/ScrollProgress";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body
      className="
    bg-[#0A192F]
    text-gray-300
    relative
    [background-image:repeating-linear-gradient(to_right,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_40px),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_40px)]
  "
    >
      <ScrollProgress />
      <CursorEffect />
      <main className="max-w-[1300px] mx-auto flex h-screen">{children}</main>
    </body>
  </html>
);

export default RootLayout;
