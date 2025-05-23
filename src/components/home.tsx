import React, { useEffect, useState } from "react";
import HeroSection from "./scrollytelling/HeroSection";
import ScrollyContainer from "./scrollytelling/ScrollyContainer";
import { motion } from "framer-motion";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f0] overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <HeroSection />
        <ScrollyContainer />

        {/* Footer */}
        <footer className="py-8 px-4 md:px-8 bg-[#e8e2d9] text-[#4a4a4a] text-center">
          <div className="max-w-4xl mx-auto">
            <p className="mb-4">
              Data sources: National Sample Survey Office (NSSO) and Household
              Consumption Expenditure Survey (HCES)
            </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} From Dal-Roti to Cola-Chips. All
              rights reserved.
            </p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Home;
