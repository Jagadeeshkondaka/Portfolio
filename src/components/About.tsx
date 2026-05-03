import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-gray-500">Introduction</p>
        <h2 className="text-4xl md:text-5xl font-serif">About me</h2>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.img
          src="/profile.jpg"
          alt="profile"
          className="rounded-3xl w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
             I’m a Full Stack Developer with a strong focus on building scalable, high-performance web applications from end to end. 
  I work across both frontend and backend technologies to create seamless, user-friendly experiences backed by efficient and reliable systems.
  
  On the frontend, I specialize in React.js, Next.js, and modern UI frameworks to build responsive and interactive interfaces. 
  On the backend, I work with Node.js, Express, and databases like MongoDB to design robust APIs and manage data effectively.
  
  I enjoy solving real-world problems through code, writing clean and maintainable solutions, and continuously learning new technologies to stay up-to-date in the fast-evolving development ecosystem.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">

            {/* Languages */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border rounded-xl p-5 bg-white/50 dark:bg-white/5 backdrop-blur"
            >
              <h3 className="font-semibold mb-2">Technologies</h3>
              <p className="text-sm text-gray-500">
                MERN Stack, Javascript, Python, Databases, System Design, DSA
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border rounded-xl p-5 bg-white/50 dark:bg-white/5 backdrop-blur"
            >
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-gray-500">
                B.Tech in Artificial Intelligence and Machine Learning
              </p>
            </motion.div>

            {/* Projects */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border rounded-xl p-5 bg-white/50 dark:bg-white/5 backdrop-blur"
            >
              <h3 className="font-semibold mb-2">Projects</h3>
              <p className="text-sm text-gray-500">
                Built more than 5 projects
              </p>
            </motion.div>

          </div>

          {/* Tools */}
          <div>
            <p className="text-gray-500 mb-3">Tools I use</p>

            <div className="flex flex-wrap gap-4">

              <div className="w-12 h-12 flex items-center justify-center border rounded-lg bg-white dark:bg-gray-900">
                <img src="/tools/vscode.png" className="w-6" />
              </div>

              <div className="w-12 h-12 flex items-center justify-center border rounded-lg bg-white dark:bg-gray-900">
                <img src="/tools/firebase.png" className="w-6" />
              </div>

              <div className="w-12 h-12 flex items-center justify-center border rounded-lg bg-white dark:bg-gray-900">
                <img src="/tools/mongodb.png" className="w-6" />
              </div>

              <div className="w-12 h-12 flex items-center justify-center border rounded-lg bg-white dark:bg-gray-900">
                <img src="/tools/figma.png" className="w-6" />
              </div>

              <div className="w-12 h-12 flex items-center justify-center border rounded-lg bg-white dark:bg-gray-900">
                <img src="/tools/git.png" className="w-6" />
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}