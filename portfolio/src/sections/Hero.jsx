import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-[100vh] flex flex-col items-center justify-center text-center px-6 py-20 pt-32 bg-[#2A2A2A] text-white"

      // ⭐ Fade + Scale on page load
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Ronik Joshi
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
        MERN Stack Developer | Creating Modern Interfaces | Lifelong Learner
      </p>

      {/* Profile Image with Glowing Border */}
      <div className="relative flex items-center justify-center">
        
        {/* Glowing Border */}
        <div
          className="absolute w-44 h-44 md:w-64 md:h-64 rounded-full 
                     bg-orange-500 opacity-15 blur-lg 
                     animate-pulse"
        ></div>

        {/* Image */}
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Ronik Joshi - Profile Picture"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full 
                     border-4 border-orange-500 relative z-10 shadow-lg"
        />
      </div>
    </motion.section>
  );
}
