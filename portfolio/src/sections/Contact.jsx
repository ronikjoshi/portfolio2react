import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  FaUserAlt,
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import BottomLine from "../components/BottomLine";

export default function Contact() {
  const form = useRef();

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animateSection, setAnimateSection] = useState(false);

  useEffect(() => {
    if (inView) setAnimateSection(true);
  }, [inView]);

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6xnj05v",
        "template_exk29f8",
        form.current,
        "kLfLk-o6LKj-L9c77"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been delivered.",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen w-full bg-neutral-900 text-white py-20 px-6 md:px-20"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={animateSection ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h3 className="text-gray-400 text-lg">Feel Free To Contact Me</h3>

        <h1 className="text-4xl font-semibold">
          Get In <span className="text-orange-500">Touch</span>
        </h1>

        <BottomLine />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left - Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          
          <form ref={form} onSubmit={handleSend} className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* ⭐ INLINE STYLE FIX */}
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                style={{ backgroundColor: "#1f1f1f", color: "white" }}
                className="w-full p-3 rounded-md border border-neutral-700 placeholder-gray-400 focus:border-orange-500 outline-none"
              />

              {/* ⭐ INLINE STYLE FIX */}
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                style={{ backgroundColor: "#1f1f1f", color: "white" }}
                className="w-full p-3 rounded-md border border-neutral-700 placeholder-gray-400 focus:border-orange-500 outline-none"
              />
            </div>

            {/* ⭐ INLINE STYLE FIX */}
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              style={{ backgroundColor: "#1f1f1f", color: "white" }}
              className="w-full p-3 rounded-md border border-neutral-700 placeholder-gray-400 focus:border-orange-500 outline-none"
            />

            {/* ⭐ INLINE STYLE FIX */}
            <textarea
              name="message"
              rows="5"
              placeholder="Message Here..."
              required
              style={{ backgroundColor: "#1f1f1f", color: "white" }}
              className="w-full p-3 rounded-md border border-neutral-700 placeholder-gray-400 focus:border-orange-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 hover:bg-orange-600 rounded-md font-medium text-white transition"
            >
              Send Message <MdSend size={20} />
            </button>

          </form>
        </div>

        {/* Right Section */}
        <div className="md:pl-24">
          
          <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>

          <div className="space-y-8">
            <div className="flex items-center">
              <FaUserAlt className="text-2xl text-orange-500 mr-5" />
              <p className="text-lg">Ronik Joshi</p>
            </div>

            <div className="flex items-center">
              <FaPhoneAlt className="text-2xl text-orange-500 mr-5" />
              <p className="text-lg">+91 8192815145</p>
            </div>

            <div className="flex items-center">
              <MdEmail className="text-3xl text-orange-500 mr-5" />
              <p className="text-lg">ronikjoshi98@gmail.com</p>
            </div>

            <div className="flex items-center">
              <FaLocationArrow className="text-2xl text-orange-500 mr-5" />
              <p className="text-lg">Dehradun, India</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl text-gray-300 mb-3">Social</h3>
            
            <div className="flex items-center space-x-5">
              <a href="" target="_blank" className="text-3xl hover:text-orange-500 transition">
                <FaLinkedin />
              </a>
              <a href="" target="_blank" className="text-3xl hover:text-orange-500 transition">
                <FaGithubSquare />
              </a>
              <a href="" target="_blank" className="text-3xl hover:text-orange-500 transition">
                <FaTwitterSquare />
              </a>
              <a href="" target="_blank" className="text-3xl hover:text-orange-500 transition">
                <FaInstagramSquare />
              </a>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}
