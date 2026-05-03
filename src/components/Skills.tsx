import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiCss,
  SiVercel,
  SiRender,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-500">My Expertise</p>
        <h2 className="text-4xl md:text-5xl font-serif">
          Skills & Technologies
        </h2>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto border rounded-2xl p-8 bg-white/50 dark:bg-white/5 backdrop-blur"
      >

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Languages */}
          <div>
            <h3 className="font-semibold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <FaPython className="hover:scale-110 transition" />
              <SiJavascript className="hover:scale-110 transition" />
              <SiTypescript className="hover:scale-110 transition" />
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <FaReact className="hover:scale-110 transition" />
              <SiNextdotjs className="hover:scale-110 transition" />
              <SiHtml5 className="hover:scale-110 transition" />
              <SiCss className="hover:scale-110 transition" />
              <SiTailwindcss className="hover:scale-110 transition" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <FaNodeJs className="hover:scale-110 transition" />
              <SiExpress className="hover:scale-110 transition" />
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="font-semibold mb-3">Databases</h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <SiMongodb className="hover:scale-110 transition" />
              <SiMysql className="hover:scale-110 transition" />
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-3">Tools</h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <FaGitAlt className="hover:scale-110 transition" />
              <SiVercel className="hover:scale-110 transition" />
              <SiRender className="hover:scale-110 transition" />
            </div>
          </div>

          {/* Concepts */}
          <div>
            <h3 className="font-semibold mb-3">Concepts</h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <FaProjectDiagram className="hover:scale-110 transition" />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}