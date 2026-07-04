import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie";
import coding from "../assets/lottie/coding.json";
import "../styles/Shared.css";

import { FaDownload } from "react-icons/fa";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // ⭐ Scroll trigger: detect when About enters viewport
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animateSection, setAnimateSection] = useState(false);

  useEffect(() => {
    if (inView) setAnimateSection(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="min-h-[100vh] pt-20 flex flex-col-reverse lg:flex-row items-center justify-between pl-[4%] pr-[4%] gap-12"
      // ⭐ Animate entire section together
      initial={{ opacity: 0, scale: 0.95 }}
      animate={animateSection ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <h2 className="text-neutral text-xl font-medium">Hello, I'm</h2>

        <h1 className="text-4xl font-semibold mb-0">Ronik Joshi</h1>

        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold"
            cursor={true}
            sequence={[
              "A Mern-stack Developer",
              2000,
              "A Full-stack Developer",
              2000,
              "A Front-end Developer",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>

        <p className="text-neutral max-w-xl mb-6 font-medium">
          Hi, I'm Ronik Joshi, a MERN Stack Developer with a strong foundation
          in modern web development and a passion for building responsive,
          user-friendly, and scalable web applications. After starting my career
          at Tata Consultancy Services (TCS), I returned to software development
          with a renewed focus on mastering the MERN stack and creating
          real-world projects that solve practical problems. I enjoy developing
          clean, intuitive interfaces with React and Tailwind CSS while also
          working confidently with Node.js, Express.js, and MongoDB to build
          efficient full-stack applications. I continuously strive to improve my
          skills, explore new technologies, and create high-quality digital
          experiences that are both functional and visually engaging.
        </p>

        <a href="" target="blank">
          <button className="flex items-center gap-3 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition">
            <span>My Resume</span>
            <FaDownload />
          </button>
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-3/4 flex justify-center">
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </div>
    </motion.div>
  );
};

export default About;
