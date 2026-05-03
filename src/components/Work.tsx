import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern portfolio built with React, Tailwind and animations.",
    img: "/p1.jpg",
    live: "https://your-live-demo.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "E-Commerce App",
    desc: "Full stack shopping app with authentication and payment.",
    img: "/p2.jpg",
    live: "https://your-live-demo.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Chat Application",
    desc: "Real-time chat system using WebSockets and Node.js.",
    img: "/p3.jpg",
    live: "https://your-live-demo.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Task Manager",
    desc: "Task management app with CRUD operations and API.",
    img: "/p4.jpg",
    live: "https://your-live-demo.com",
    github: "https://github.com/your-repo",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 px-6 md:px-16 text-center">

      {/* Heading */}
      <p className="text-gray-500">My portfolio</p>
      <h2 className="text-4xl md:text-5xl font-serif mb-10">
        My latest Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-6">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >

            {/* CARD */}
            <div className="relative">

              <img
                src={p.img}
                className="rounded-xl w-full h-60 object-cover"
              />

              {/* Overlay Content (same UI style) */}
              <div className="absolute bottom-3 left-3 right-3 bg-white dark:bg-black p-3 rounded-lg flex justify-between items-center">

                <div className="text-left">
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-xs text-gray-500">
                    {p.desc}
                  </p>
                </div>

                {/* Arrow → Live Demo */}
                <button
                  onClick={() => window.open(p.live, "_blank")}
                  className="text-lg hover:scale-125 transition"
                >
                  ↗
                </button>

              </div>
            </div>

            {/* SOURCE CODE BUTTON */}
            <div className="mt-3">
              <button
                onClick={() => window.open(p.github, "_blank")}
                className="text-sm px-4 py-2 border rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Source Code
              </button>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}