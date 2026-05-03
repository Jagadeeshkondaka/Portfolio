import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces using React.js, Next.js, and modern UI frameworks with a focus on performance and user experience.",
  },
  {
    title: "Backend Development",
    desc: "Designing scalable server-side applications and REST APIs using Node.js and Express, ensuring secure and efficient data handling.",
  },
  {
    title: "Full Stack Development",
    desc: "Developing complete web applications by integrating frontend and backend systems, delivering seamless and end-to-end solutions.",
  },
  {
    title: "Databases",
    desc: "Working with databases like MongoDB and SQL to design efficient schemas, manage data, and optimize application performance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-16 text-center">

      <p className="text-gray-500">What I offer</p>
      <h2 className="text-4xl md:text-5xl font-serif mb-6">
        My Services
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="border rounded-xl p-6 text-left bg-white/50 dark:bg-white/5 backdrop-blur"
          >
            <div className="w-10 h-10 bg-pink-500 rounded-lg mb-4"></div>

            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{s.desc}</p>

            <span className="text-sm">Read more →</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}