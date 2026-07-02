"use client";

import { motion } from "framer-motion";
import p1 from '../assets/project1.png'
import p2 from '../assets/project2.png'
import p4 from '../assets/project4.png'
import p3 from '../assets/p3.png'

const projects = [
  {
    title: "AI-powered Resume Builder ",
    desc: "This platform allows users to upload their existing resume, enhance it using AI, generate a modern ATS-friendly version, and share it instantly via a public link.",
    img: p4,
    live: "https://ai-ressume-builder-yfgf.vercel.app/",
    github: "https://github.com/Jagadeeshkondaka/ResumeBuilder",
  },

  {
    title: "Hire Flow – AI-Powered Online Job & Hiring Platform",
    desc: "Hire Flow combines job management, AI-driven insights, automated coding assessments, and real-time support into one intelligent hiring ecosystem.",
    img: p2,
    live: "https://hire-flow-zeta.vercel.app/",
    github: "https://github.com/Jagadeeshkondaka/Hire-Flow",
  },
  {
    title: "FlowTrack",
    desc: "A web application that helps users efficiently track, manage, and optimize their daily tasks and workflows.",
    img: p1,
    live: "https://live-demo.com",
    github: "https://github.com/Jagadeeshkondaka/Flowtrack",
  },
  {
    title: "DataVerse",
    desc: "A data-driven application that enables users to explore, visualize, and manage datasets with interactive insights.",
    img: p3,
    live: "https://live-demo.com",
    github: "https://github.com/Jagadeeshkondaka/Dataverse",
  },

];

export default function Work() {
  return (
    <section id="work" className="py-20 px-6 md:px-16 text-center">

      <p className="text-gray-500">My portfolio</p>
      <h2 className="text-4xl md:text-5xl font-serif mb-10">
        My latest Projects
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="border rounded-xl p-4 bg-white dark:bg-white/5 backdrop-blur flex flex-col"
          >

            {/* Image */}
            <img
              src={p.img}
              alt={p.title}
              className="rounded-lg w-full h-52 object-contain bg-gray-100"
            />

            {/* Content BELOW image */}
            <div className="mt-4 text-left flex-grow">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {p.desc}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-4">


              {/* Source Code */}
              <button
                onClick={() => window.open(p.github, "_blank")}
                className="text-sm px-4 py-2 border rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Source Code
              </button>
              <button
                onClick={() => window.open(p.live, "_blank")}
                className="text-2xl hover:scale-125 transition"
              >
                ↗
              </button>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}