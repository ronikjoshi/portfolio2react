import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie";
import readingBook from "../assets/lottie/reading-book.json";

const Experience = () => {

  // Scroll trigger
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animateSection, setAnimateSection] = useState(false);

  useEffect(() => {
    if (inView) setAnimateSection(true);
  }, [inView]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const experience = {
    company: "Tata Consultancy Services (TCS)",
    role: "MERN Stack Developer / Front-End Developer",
    duration: "MM YYYY – MM YYYY",
    points: [
      "Developed responsive and modern interfaces using React.",
      "Optimized performance and ensured cross-browser compatibility.",
      "Worked with Node.js, Express, and MongoDB for backend and APIs.",
      "Collaborated in an agile team delivering scalable web solutions.",
    ],
  };

  return (
    <motion.div
      ref={ref}
      className="pt-24 min-h-[100vh] flex flex-col justify-center pl-[4%] pr-[4%]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={animateSection ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >

      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-semibold drop-shadow-md">
          My <span className="text-primary">Experience</span>
        </h1>
      </div>

      {/* Layout: LEFT = Experience | RIGHT = Lottie */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

        {/* LEFT — TIMELINE (Only Fade In) */}
        <motion.div
          className="flex flex-col justify-center h-full mx-auto lg:mr-auto"
          initial={{ opacity: 0 }}
          animate={animateSection ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative border-l-4 border-primary/60 pl-6">
            <div className="relative mb-12">

              {/* Dot */}
              <div className="absolute -left-4 top-1 w-4 h-4 bg-primary rounded-full border-4 border-black"></div>

              <h3 className="text-2xl font-semibold text-primary">
                {experience.company}
              </h3>

              <p className="text-neutral font-semibold">{experience.role}</p>
              <p className="text-sm text-neutral mb-4">{experience.duration}</p>

              <ul className="text-neutral space-y-2 text-sm">
                {experience.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span> {p}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </motion.div>

        {/* RIGHT — LOTTIE (Only Fade In) */}
        <motion.div
          className="mx-auto lg:ml-auto"
          initial={{ opacity: 0 }}
          animate={animateSection ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Lottie
            options={defaultOptions}
            height={"85%"}
            width={"85%"}
            className="mx-auto lg:ml-auto"
          />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Experience;
