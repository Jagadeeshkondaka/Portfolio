import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import profile from '../assets/profile.jpeg'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-gray-500 text-sm">Introduction</p>
        <h2 className="text-4xl md:text-5xl font-serif mt-2">
          About me
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2  items-center">

        {/* LEFT IMAGE */}
        <motion.img
          src={profile}
          className="w-[380px] md:w-[420px] rounded-3xl mx-auto"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-7 mb-10 text-lg">
            Full Stack (MERN) Developer with strong fundamentals in DSA and core CS concepts.
            Skilled in building scalable frontend and backend applications with solid system design.
            Interested in AI/ML integration to create intelligent, real-world solutions.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-2 gap-6">


            {/* Education */}
            <div className="border rounded-xl p-6 bg-white dark:bg-[#0f172a] hover:shadow-lg transition">

              <FaGraduationCap className="text-2xl mb-3 text-gray-700 dark:text-gray-300" />

              <h3 className="font-semibold text-sm mb-2">Education</h3>

              <p className="text-xs text-gray-500 leading-5">
                B.Tech in Artificial Intelligence and<br />
                Machine Learning
              </p>

            </div>

            {/* Projects */}
            <div className="border rounded-xl p-6 bg-white dark:bg-[#0f172a] hover:shadow-lg transition">
              <a href="#work">

                <FaBriefcase className="text-2xl mb-3 text-gray-700 dark:text-gray-300" />

                <h3 className="font-semibold text-sm mb-2">Projects</h3>
            
                <p className="text-xs text-gray-500 leading-5">
                  Built more than 7 <br />
                  projects
                </p>
              </a>

            </div>

          </div>
          

        </motion.div>
      </div>
    </section>
  );
}