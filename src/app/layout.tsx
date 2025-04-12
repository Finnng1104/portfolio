"use client";
import "./globals.css";
import "@/config/i18n";
import CursorEffect from "@/components/CursorEffect";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className="bg-[#0A192F] text-gray-300 relative">
      <CursorEffect />
        <main className="max-w-[1300px] mx-auto flex h-screen">
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;