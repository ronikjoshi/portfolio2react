import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { RiMenu3Fill } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { FaHome, FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";

/* ---------------- Resume Button ---------------- */
const ResumeButton = () => (
  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2.5 text-lg font-semibold
      bg-orange-500 text-white rounded-md
      hover:bg-orange-600 transition"
  >
    Resume <FaDownload />
  </a>
);

/* ---------------- Navbar ---------------- */
export default function Navbar() {
  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "Project", link: "/project", icon: <MdWork /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((v) => !v);

  /* -------- Hide Navbar on Scroll (MOBILE SAFE) -------- */
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y > lastY.current && y > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed left-0 w-full z-50
        bg-[#1A1A1A]
        transition-[top] duration-300
        ${hidden ? "top-[-100px]" : "top-0"}
      `}
    >
      <div className="flex items-center justify-between px-4 md:px-20 py-3">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-lobster text-orange-500">
            Ronik Joshi
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto">
          {navLinks.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              className={({ isActive }) =>
                `text-lg font-bold transition
                 hover:text-orange-400
                 ${isActive ? "text-orange-400" : "text-white"}`
              }
            >
              {item.title}
            </NavLink>
          ))}
          <ResumeButton />
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleDrawer}
          aria-label="Open navigation"
          className="lg:hidden text-white text-2xl ml-auto"
        >
          <RiMenu3Fill />
        </button>

        {/* Mobile Drawer */}
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          overlayColor="rgba(0,0,0,0.75)"
          overlayClassName="bg-black"
          className="bg-[#1A1A1A] text-white p-6 flex flex-col justify-between"
        >
          <button
            onClick={toggleDrawer}
            aria-label="Close navigation"
            className="text-3xl hover:text-orange-500 transition"
          >
            <GiCrossMark />
          </button>

          <ul className="mt-8 space-y-6">
            {navLinks.map((item) => (
              <li key={item.title} onClick={toggleDrawer}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `flex items-center gap-3 text-lg transition
                     hover:text-orange-400
                     ${isActive ? "text-orange-400" : "text-white"}`
                  }
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <ResumeButton />
          </div>

          <p className="text-center text-neutral-500 text-sm mt-12">
            © 2023 Ronik Joshi. All Rights Reserved.
          </p>
        </Drawer>
      </div>
    </header>
  );
}
