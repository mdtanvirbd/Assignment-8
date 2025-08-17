import React from "react";

const About = () => {
  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#23BE0A]">
        About Me
      </h1>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            src="https://i.ibb.co.com/zHZZSTQC/photo-2025-08-17-11-52-22.jpg"
            alt="Profile"
            className="rounded-xl shadow-lg border-4 border-green-500"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 space-y-4">
          <p className="text-gray-700 text-lg">
            Hello! I'm <span className="font-semibold text-[#23BE0A]">Md Tanvir Hossain</span>, a passionate
            <span className="font-semibold text-[#23BE0A]"> Computer Science & Engineering</span> student from Bangladesh. I love
            exploring the world of <span className="font-semibold text-[#23BE0A]">web development</span> and
            <span className="font-semibold text-[#23BE0A]"> machine learning</span>. Over time, I've
            developed projects in <span className="font-semibold text-[#23BE0A]">React, OpenGL, and Data Analysis</span>.
          </p>

          <p className="text-gray-700 text-lg">
            My journey in technology is driven by curiosity and creativity. I enjoy turning ideas into real-world
            applications and learning new tools and frameworks every day. Besides programming, I also have a keen
            interest in <span className="font-semibold text-[#23BE0A]">AI</span> and <span className="font-semibold text-[#23BE0A]">data visualization</span>.
          </p>

          <p className="text-gray-700 text-lg">
            I'm always looking to collaborate on exciting projects and expand my skill set. My goal is to create
            impactful solutions that make life easier and inspire others in the tech community.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/contact"
              className="bg-[#23BE0A] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Contact Me
            </a>
            <a
              href="https://mdtanvirbd.github.io/tanvir-portfolio/"
              className="bg-[#59C6D2] text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              My Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Fun Facts or Skills */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#23BE0A]">8+ Projects</h2>
          <p className="text-gray-600 mt-2">Developed and deployed diverse projects in web development and ML.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#23BE0A]">React & Frontend</h2>
          <p className="text-gray-600 mt-2">Experienced in building interactive and responsive web apps.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#23BE0A]">Data Visualization</h2>
          <p className="text-gray-600 mt-2">Analyzing data and representing insights visually using charts.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
