"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorEffect: FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      animate={{ x: position.x - 150, y: position.y - 150 }}
      transition={{ type: "tween", ease: "linear", duration: 0.05 }}
    >
      <div className="absolute w-[300px] h-[300px] bg-blue-500 opacity-20 rounded-full blur-[100px]" />
    </motion.div>
  );
};

export default CursorEffect;