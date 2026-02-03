import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Lottie from "react-lottie";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMui,
} from "react-icons/si";

import BottomLine from "../components/BottomLine";
import man from "../assets/lottie/man.json";

const Skills = () => {
  // ⭐ All skills in one array
  const skills = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { title: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { title: "MUI", icon: <SiMui className="text-blue-500" /> },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // ⭐ Scroll Trigger Setup (same as About)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animateSection, setAnimateSection] = useState(false);

  useEffect(() => {
    if (inView) setAnimateSection(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="pt-24"
      
      // ⭐ Smooth fade + scale animation for whole section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={animateSection ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Heading + BottomLine */}
      <div className="text-center mb-8 -translate-x-3">
        <h1 className="text-4xl font-semibold drop-shadow-md">
          My <span className="text-primary">Skills</span>
        </h1>
        <BottomLine size="small" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly my-8 gap-12">

        {/* Lottie Animation */}
        <div className="md:-translate-x-12">
          <Lottie options={defaultOptions} height={400} width={360} />
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-cyan-500 text-xl font-semibold mb-4 text-center md:text-left">
            Tech Stack & Tools
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4 place-items-center">
            {skills.map((skill) => (
              <div key={skill.title} className="text-center">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
                <p className="text-xs mt-1 text-gray-300">{skill.title}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default Skills;
