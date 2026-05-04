import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", dark ? "light" : "dark");
    setDark(!dark);
  };

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 px-6 md:px-16 py-5 flex justify-between items-center"
    >
      <h1 className="font-bold text-xl">Jagadeesh.</h1>

      <div className="hidden md:flex gap-8 px-6 py-2 rounded-full border backdrop-blur bg-white/40 dark:bg-white/10">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#work">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button onClick={toggleTheme} className="border rounded-sm text-xl border-4">
        {dark ? "☀️" : "🌙"}
      </button>
    </motion.div>
  );
}