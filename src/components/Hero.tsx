"use client";

import { motion } from "framer-motion";
import profile from'../assets/profile.jpeg'
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32"
    >
      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Jagadeesh profile"
        className="w-38 h-40 rounded-full mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Intro Text */}
      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi! I'm Jagadeesh Kondaka 👋
      </motion.p>

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-serif leading-[1.1]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Full Stack Developer <br /> based in India.
      </motion.h1>

      {/* Description */}
      <motion.p
        className="mt-5 text-gray-500 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        I am a full stack developer from India with experience in building modern web applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {/* Contact Button (SAFE) */}
        <a
          href="#contact"
          className="bg-black text-white px-6 py-3 rounded-full dark:bg-white dark:text-black"
        >
          contact me →
        </a>

        {/* Resume Button */}
        <a
          href={resume}
          target="_blank"
          className="border px-6 py-3 rounded-full"
        >
          my resume ↓
        </a>
      </motion.div>
    </section>
  );
}