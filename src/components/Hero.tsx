import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32">

      <motion.img
        src="/profile.jpg"
        className="w-24 h-24 rounded-full mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.p
        className="text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi! I'm Jagadeesh Kondaka 👋
      </motion.p>

      <motion.h1
        className="text-5xl md:text-7xl font-serif leading-[1.1]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        full stack developer <br /> based in India.
      </motion.h1>

      <motion.p
        className="mt-5 text-gray-500 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        I am a full stack developer from India, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>

      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button className="bg-black text-white px-6 py-3 rounded-full dark:bg-white dark:text-black">
          contact me →
        </button>

        <button className="border px-6 py-3 rounded-full">
          my resume ↓
        </button>
      </motion.div>
    </section>
  );
}