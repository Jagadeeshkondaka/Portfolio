"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
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

// ✅ Type for SkillItem props
type SkillItemProps = {
  Icon: React.ElementType;
  name: string;
};

export default function Skills() {

  const iconClass =
    "text-2xl hover:scale-110 transition-transform duration-200";

  // ✅ Typed SkillItem Component
  const SkillItem = ({ Icon, name }: SkillItemProps) => (
    <div className="flex flex-col items-center text-sm">
      <Icon className={iconClass} title={name} />
      <span className="mt-1">{name}</span>
    </div>
  );

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
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto border rounded-2xl p-8 bg-white/50 dark:bg-white/5 backdrop-blur"
      >

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Languages */}
          <div>
            <h3 className="font-semibold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-4">
              <SkillItem Icon={FaPython} name="Python" />
              <SkillItem Icon={SiJavascript} name="JavaScript" />
              <SkillItem Icon={SiTypescript} name="TypeScript" />
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              <SkillItem Icon={FaReact} name="React" />
              <SkillItem Icon={SiNextdotjs} name="Next.js" />
              <SkillItem Icon={SiHtml5} name="HTML" />
              <SkillItem Icon={SiCss} name="CSS" /> {/* ✅ FIXED */}
              <SkillItem Icon={SiTailwindcss} name="Tailwind CSS" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-4">
              <SkillItem Icon={FaNodeJs} name="Node.js" />
              <SkillItem Icon={SiExpress} name="Express.js" />
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="font-semibold mb-3">Databases</h3>
            <div className="flex flex-wrap gap-4">
              <SkillItem Icon={SiMongodb} name="MongoDB" />
              <SkillItem Icon={SiMysql} name="MySQL" />
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-3">Tools</h3>
            <div className="flex flex-wrap gap-4">
              <SkillItem Icon={FaGitAlt} name="Git" />
              <SkillItem Icon={SiVercel} name="Vercel" />
              <SkillItem Icon={SiRender} name="Render" />
            </div>
          </div>

          {/* Concepts */}
          <div>
            <h3 className="font-semibold mb-3">Concepts</h3>
            <p className="text-sm text-gray-500 font-semibold">
              REST APIs, Data Structures, OOP, System Design, OS, Computer Networks
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}