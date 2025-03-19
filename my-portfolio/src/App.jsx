import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const tabs = [
  { name: "Home", icon: <FaHome />, tooltip: "Home" },
  { name: "Skills", icon: <FaTools />, tooltip: "Skills" },
  { name: "Projects", icon: <FaProjectDiagram />, tooltip: "Projects" },
  { name: "Contact", icon: <FaEnvelope />, tooltip: "Contact" },
];

const projects = [
  {
    name: "NeuImager",
    description:
      "An AI-powered gel imaging device that improves efficiency by 70%. Developed with Python, OpenCV, and Kivy.",
    image: "/images/neuimager.jpg",
  },
  {
    name: "Truheart",
    description:
      "A machine learning-driven health monitoring system for cardiac arrest detection, improving ROI accuracy by 40%.",
    image: "/images/truheart.jpg",
  },
  {
    name: "Anti-Phish",
    description:
      "An AI-powered cybersecurity tool that detects and prevents phishing attacks with 90% accuracy using Scikit-learn and MySQL.",
    image: "/images/antiphish.jpg",
  },
];

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Python",
  "Machine Learning",
  "AI",
  "Cloud Computing",
  "MongoDB",
  "SQL",
  "Cybersecurity",
];

const Navbar = ({ activeTab, setActiveTab }) => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="top-4 left-1/2 z-50 fixed flex justify-center items-center space-x-8 bg-black bg-opacity-90 shadow-md drop-shadow-2xl backdrop-blur-3xl p-4 rounded-xl text-white -translate-x-1/2 transform"
  >
    <div className="flex space-x-6 text-lg">
      {tabs.map((tab) => (
        <div key={tab.name} className="group relative">
          <button
            onClick={() => setActiveTab(tab.name)}
            className={`transition cursor-pointer text-xl ${activeTab === tab.name ? "text-cyan-400 font-bold" : "hover:text-cyan-300"
              }`}
          >
            {tab.icon}
          </button>
          {/* Tooltip Positioned Below the Icon */}
          <span className="bottom-[-35px] left-1/2 absolute bg-gray-700 opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md text-white text-sm transition-opacity -translate-x-1/2 duration-300 transform">
            {tab.tooltip}
          </span>
        </div>
      ))}
    </div>
  </motion.nav>
);

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="relative flex flex-col justify-center items-center bg-gradient-to-br from-[#0c0f18] via-[#1b1e3f] to-[#06080f] h-screen overflow-hidden font-ibm text-white text-center">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex mt-20 p-6 w-full max-w-6xl">
        {activeTab === "Home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center space-x-8 w-full"
          >
            {/* Left Section: Profile Image */}
            <div className="flex justify-center items-center w-1/3">
              <motion.img
                src="/images/placeholder.jpg"
                alt="Profile"
                className="shadow-xl border-4 border-cyan-400 rounded-full w-48 h-48"
              // animate={{ scale: [0.9, 1.1, 0.9] }}
              // transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Right Section: Summary */}
            <div className="w-2/3 text-left">
              <h2 className="drop-shadow-lg mb-4 font-extrabold text-cyan-400 text-5xl">Hi, Iam Aswin</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate System Engineer specializing in **AI, Cloud Computing, and Full-Stack
                Development**. Experienced in developing **scalable applications** and working with modern
                **cutting-edge technologies**. Strong interest in **innovating solutions for real-world
                challenges**.
              </p>
            </div>
          </motion.div>
        )}
        {activeTab === "Skills" && (
          <motion.div
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center w-full"
          >
            <h2 className="drop-shadow-lg mb-8 font-extrabold text-cyan-400 text-5xl">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-900 hover:bg-cyan-500 shadow-lg px-6 py-3 rounded-full text-white text-lg text-center transition"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {activeTab === "Projects" && (
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex w-full"
          >
            {/* Left Section: Project Names */}
            <div className="space-y-4 w-1/3">
              <h2 className="drop-shadow-lg mb-8 font-extrabold text-cyan-400 text-5xl">Projects</h2>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="hover:bg-gray-900 p-4 border border-cyan-400 rounded-lg text-center transition cursor-pointer"
                >
                  <h3 className="font-bold text-cyan-300 text-xl">{project.name}</h3>
                </motion.div>
              ))}
            </div>

            {/* Right Section: Project Description with Background Image */}
            <div className="relative pl-6 w-2/3">
              <motion.div
                className="absolute inset-0 bg-cover bg-center shadow-lg rounded-lg transition-opacity duration-500"
                style={{ backgroundImage: `url(${selectedProject.image})`, opacity: 0.5 }}
                whileHover={{ opacity: 0.7 }}
              />
              <p className="relative bg-gray-800 bg-opacity-70 shadow-lg mt-4 p-4 rounded-lg text-gray-300 text-lg">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        )}
        {activeTab === "Contact" && (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center w-full"
          >
            <h2 className="drop-shadow-lg font-extrabold text-cyan-400 text-5xl">Contact Me</h2>
            <div className="bg-black bg-opacity-50 shadow-lg mt-8 p-4 rounded-lg w-fit text-xl">
              Let's connect and build something amazing.
            </div>
            <p className="mt-6 text-lg">
              📧{" "}
              <a href="mailto:aswnvm@gmail.com" className="text-cyan-300 hover:underline">
                aswnvm@gmail.com
              </a>
            </p>
            <p className="text-lg">
              🔗{" "}
              <a href="https://www.linkedin.com/in/aswin-vm" className="text-cyan-300 hover:underline">
                linkedin.com/in/aswin-vm
              </a>
            </p>
            <a
              href="/files/ASWIN_VM.pdf"
              download
              className="bg-cyan-600 hover:bg-cyan-500 shadow-lg mt-4 px-6 py-3 rounded-lg text-white transition duration-300"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
