import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Items from "../Utils/Items";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import { FaLink, FaCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImage from "../assets/placeholder.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick-custom.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth >= 1000
  );

  useEffect(() => {
    const filtered = Items.find((item) => item.id === parseInt(id));
    setItem(filtered);
  }, [id]);

  // 🔑 Manually control screen size (rock-solid)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 2 : 1, // ✅ desktop vs mobile
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  if (!item) return null;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-neutral-300">
      <h1 className="text-center text-4xl font-semibold text-white mb-10">
        {item.title}
      </h1>

      <Slider {...settings}>
        {item.img?.map((image, index) => (
          <div key={index} className="mt-6 px-3">
            <div className="rounded-lg overflow-hidden shadow-lg bg-[#1e1e1e] border-2 border-primary">
              <div className="w-full h-[244px] sm:h-[246px] bg-[#181818] flex items-center justify-center px-3 py-1.5">
                <LazyLoadImage
                  src={image}
                  placeholderSrc={placeholderImage}
                  alt={`Project screenshot ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <p className="mt-10 text-lg leading-relaxed">
        <span className="font-semibold text-white text-xl">
          Description:
        </span>{" "}
        {item.description}
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Features:
        </h2>
        <ul className="list-disc ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
          {item.features?.map((feature, index) => (
            <li key={index} className="text-neutral-300">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Tools & Technologies:
        </h2>
        <ul className="list-disc ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
          {item.technologies?.map((tech, index) => (
            <li key={index} className="text-neutral-300">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4 mt-12">
        <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
          <PrimaryBtn>
            <span>Visit Now</span>
            <FaLink />
          </PrimaryBtn>
        </a>

        <a href={item.codeLink} target="_blank" rel="noopener noreferrer">
          <SecondaryBtn>
            <span>Source Code</span>
            <FaCode />
          </SecondaryBtn>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
