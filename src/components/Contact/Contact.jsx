import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#23BE0A]">
        Contact Me
      </h1>

      <p className="text-center text-gray-700 text-lg mb-8">
        I’m always open to connect! Reach out to me via any of the following platforms:
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/mdtanvirbd"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl shadow-lg hover:bg-gray-200 transition"
        >
          <FaGithub className="text-3xl text-black" />
          <span className="text-lg font-semibold">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/md-tanvir-hossain-346011267/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-100 p-4 rounded-xl shadow-lg hover:bg-blue-200 transition"
        >
          <FaLinkedin className="text-3xl text-blue-700" />
          <span className="text-lg font-semibold">LinkedIn</span>
        </a>

        {/* Email */}
        <a
          href="youaretanvirhossain@gmail.com"
          className="flex items-center gap-3 bg-green-100 p-4 rounded-xl shadow-lg hover:bg-green-200 transition"
        >
          <FaEnvelope className="text-3xl text-green-700" />
          <span className="text-lg font-semibold">Email Me</span>
        </a>
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p>© 2025 Md Tanvir Hossain. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
