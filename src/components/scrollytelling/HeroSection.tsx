import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollDown?: () => void;
}

const HeroSection = ({ onScrollDown = () => {} }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-amber-50">
      {/* Background illustration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-amber-500" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-green-500" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-red-500" />
        <div className="absolute bottom-20 right-20 w-36 h-36 rounded-full bg-blue-500" />

        {/* Food icons as SVG outlines */}
        <svg
          className="absolute top-1/3 left-1/5"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10C30 10 10 30 10 50C10 70 30 90 50 90C70 90 90 70 90 50C90 30 70 10 50 10Z"
            stroke="#6B7280"
            strokeWidth="2"
          />
        </svg>
        <svg
          className="absolute bottom-1/3 right-1/4"
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="100"
            height="60"
            rx="5"
            stroke="#6B7280"
            strokeWidth="2"
          />
        </svg>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl font-mono">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900">
            <span className="text-amber-600">From Dal-Roti</span>{" "}
            <br className="md:hidden" />
            <span className="text-red-500">to Cola-Chips</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Explore how Indian household food spending has transformed over four
            decades, from traditional staples to processed convenience foods.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <button
            onClick={onScrollDown}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-amber-600 transition-colors"
            aria-label="Scroll down to explore"
          >
            <span className="text-base mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </button>
        </motion.div>
      </div>
      {/* Decorative food icons */}
      <motion.div
        className="absolute left-8 top-1/4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-amber-200 flex items-center justify-center">
          <span className="text-2xl md:text-3xl">🍚</span>
        </div>
      </motion.div>
      <motion.div
        className="absolute right-8 top-1/3"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-yellow-200 flex items-center justify-center">
          <span className="text-2xl md:text-3xl">🍲</span>
        </div>
      </motion.div>
      <motion.div
        className="absolute left-12 bottom-1/4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-red-200 flex items-center justify-center">
          <span className="text-2xl md:text-3xl">🥤</span>
        </div>
      </motion.div>
      <motion.div
        className="absolute right-12 bottom-1/3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-orange-200 flex items-center justify-center">
          <span className="text-2xl md:text-3xl">🍟</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
