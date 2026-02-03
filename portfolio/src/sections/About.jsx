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
        <h2 className="text-neutral text-xl font-medium">
          Hello, I'm
        </h2>

        <h1 className="text-4xl font-semibold mb-0">
          Ronik Joshi
        </h1>

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
          I’m a MERN Stack Developer with strong front-end expertise, supported by hands-on experience at Tata Consultancy Services (TCS). There, I built responsive, user-friendly interfaces and worked with agile teams to deliver scalable, high-quality web solutions focused on modern UI/UX and performance optimization.
While front-end is my core strength, I also work confidently with Node.js, Express, and MongoDB, allowing me to build clean and efficient end-to-end features. I’m continually learning and passionate about creating smooth, impactful digital experiences.
        </p>

        <a
          href=""
          target="blank"
        >
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
