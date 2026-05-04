import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-16 text-center">

      <h2 className="text-2xl font-bold">
        Jagadeesh<span className="text-pink-500">.</span>
      </h2>

      <p className="text-gray-500 mt-2">
        jagadeeshkondaka123@gmail.com
      </p>

      {/* Icons */}
      <div className="flex justify-center gap-6 mt-6 text-4xl">

        <a
          href="https://github.com/Jagadeeshkondaka"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition text"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/jagadeeshkondaka"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaLinkedin />
        </a>

      </div>

      <p className="text-sm text-gray-400 mt-6">
        © 2025 Jagadeesh Kondaka. All rights reserved.
      </p>
    </footer>
  );
}