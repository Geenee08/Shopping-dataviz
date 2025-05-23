import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";

interface FoodItem {
  name: string;
  percentage2004: number;
  percentage2023: number;
  color: string;
  icon: string;
}

interface CartComparisonProps {
  title?: string;
  description?: string;
}

const CartComparison = ({
  title = "The Changing Indian Shopping Cart",
  description = "See how food budget allocation has dramatically shifted between 2004 and 2023",
}: CartComparisonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Sample data for food items
  const foodItems: FoodItem[] = [
    {
      name: "Rice & Wheat",
      percentage2004: 32,
      percentage2023: 18,
      color: "#E6C288", // earthy brown
      icon: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80",
    },
    {
      name: "Pulses & Dal",
      percentage2004: 15,
      percentage2023: 8,
      color: "#F2B05E", // orange-brown
      icon: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=300&q=80",
    },
    {
      name: "Vegetables",
      percentage2004: 18,
      percentage2023: 12,
      color: "#8BC34A", // green
      icon: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=300&q=80",
    },
    {
      name: "Milk & Dairy",
      percentage2004: 14,
      percentage2023: 16,
      color: "#F5F5F5", // off-white
      icon: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&q=80",
    },
    {
      name: "Oils & Fats",
      percentage2004: 10,
      percentage2023: 7,
      color: "#FFD54F", // yellow
      icon: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&q=80",
    },
    {
      name: "Processed Foods",
      percentage2004: 6,
      percentage2023: 24,
      color: "#FF5252", // bright red
      icon: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&q=80",
    },
    {
      name: "Beverages",
      percentage2004: 3,
      percentage2023: 12,
      color: "#42A5F5", // bright blue
      icon: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=300&q=80",
    },
    {
      name: "Spices & Others",
      percentage2004: 2,
      percentage2023: 3,
      color: "#FF7043", // spice red
      icon: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300&q=80",
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen py-16 px-4 md:px-8 bg-gray-50 flex flex-col items-center justify-center"
    >
      <motion.div
        className="max-w-6xl w-full text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* 2004 Cart */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
          variants={itemVariants}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">2004</h3>
            <ShoppingCart className="h-8 w-8 text-gray-700" />
          </div>

          <div className="flex-1 space-y-4">
            {foodItems.map((item) => (
              <motion.div
                key={`2004-${item.name}`}
                className="relative h-12 flex items-center rounded-md overflow-hidden"
                initial={{ width: 0 }}
                animate={
                  isInView
                    ? { width: `${item.percentage2004 * 3}%` }
                    : { width: 0 }
                }
                transition={{ duration: 1, delay: 0.5 }}
                style={{ backgroundColor: item.color }}
              >
                <div className="absolute left-0 h-full w-12 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-8 w-8 object-cover rounded-full"
                  />
                </div>
                <span className="ml-14 font-medium text-gray-800">
                  {item.name} ({item.percentage2004}%)
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2023 Cart */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
          variants={itemVariants}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">2023</h3>
            <ShoppingCart className="h-8 w-8 text-gray-700" />
          </div>

          <div className="flex-1 space-y-4">
            {foodItems.map((item) => (
              <motion.div
                key={`2023-${item.name}`}
                className="relative h-12 flex items-center rounded-md overflow-hidden"
                initial={{ width: 0 }}
                animate={
                  isInView
                    ? { width: `${item.percentage2023 * 3}%` }
                    : { width: 0 }
                }
                transition={{ duration: 1, delay: 0.8 }}
                style={{ backgroundColor: item.color }}
              >
                <div className="absolute left-0 h-full w-12 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-8 w-8 object-cover rounded-full"
                  />
                </div>
                <span className="ml-14 font-medium text-gray-800">
                  {item.name} ({item.percentage2023}%)
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-3 w-3 rounded-full bg-[#E6C288]"></div>
          <ArrowRight className="h-5 w-5 text-gray-500" />
          <div className="h-3 w-3 rounded-full bg-[#FF5252]"></div>
        </div>
        <p className="text-lg text-gray-600">
          Notice how <span className="font-semibold">staple foods</span> like
          rice, wheat, and pulses have
          <span className="text-red-500 font-semibold">
            {" "}
            decreased significantly
          </span>
          , while
          <span className="font-semibold">
            {" "}
            processed foods and beverages
          </span>{" "}
          have
          <span className="text-green-500 font-semibold">
            {" "}
            increased dramatically
          </span>{" "}
          in the Indian household budget.
        </p>
      </motion.div>
    </div>
  );
};

export default CartComparison;
