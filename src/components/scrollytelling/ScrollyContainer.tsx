import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CartComparison from "./CartComparison";
import DataVisualization from "./DataVisualization";

interface ScrollyContainerProps {
  children?: React.ReactNode;
}

const ScrollyContainer: React.FC<ScrollyContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Define sections for the scrollytelling experience
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "cart-comparison", title: "Shopping Cart Comparison" },
    { id: "data-visualization", title: "Food Budget Evolution" },
    { id: "staples-decline", title: "Declining Staples" },
    { id: "processed-rise", title: "Rise of Processed Foods" },
    { id: "timeline", title: "Historical Timeline" },
    { id: "conclusion", title: "Reflection" },
  ];

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements =
        containerRef.current.querySelectorAll(".scroll-section");

      sectionElements.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        const offsetBottom = offsetTop + rect.height;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Progress indicator for the overall scrollytelling experience
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-stone-50 min-h-[4000px]"
    >
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-stone-200">
        <motion.div
          className="h-full bg-amber-600"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Section navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                const sectionElement = containerRef.current?.querySelector(
                  `#${section.id}`,
                );
                sectionElement?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSection === index ? "bg-amber-600 scale-125" : "bg-stone-400"}`}
              aria-label={`Navigate to ${section.title}`}
            />
          ))}
        </div>
      </div>

      {/* Intro section */}
      <section
        id="intro"
        className="scroll-section h-screen flex items-center justify-center p-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Evolution of Indian Food Spending
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-stone-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Scroll down to explore how Indian household food budgets have
            transformed over four decades, from traditional staples to modern
            processed foods.
          </motion.p>
          <motion.div
            className="animate-bounce mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-amber-600"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Cart comparison section */}
      <section
        id="cart-comparison"
        className="scroll-section min-h-screen py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-12 text-center text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            From Dal-Roti to Cola-Chips: What's in Your Cart?
          </motion.h2>
          <CartComparison />
        </div>
      </section>

      {/* Data visualization section */}
      <section
        id="data-visualization"
        className="scroll-section min-h-screen py-20 px-4 bg-stone-100"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-12 text-center text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Four Decades of Changing Food Budgets
          </motion.h2>
          <DataVisualization />
        </div>
      </section>

      {/* Staples decline section */}
      <section
        id="staples-decline"
        className="scroll-section min-h-screen py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-12 text-center text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Declining Share of Staples
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Rice", "Pulses", "Oil", "Sugar"].map((item, index) => (
              <motion.div
                key={item}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-amber-500"
                      animate={{ scale: [1, 0.6, 0.6] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-stone-600">
                  {item === "Rice"
                    ? "38% → 22%"
                    : item === "Pulses"
                      ? "12% → 7%"
                      : item === "Oil"
                        ? "9% → 5%"
                        : "8% → 3%"}
                </p>
                <p className="text-sm text-stone-500 mt-2">
                  Share of food budget (1983 → 2023)
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processed foods rise section */}
      <section
        id="processed-rise"
        className="scroll-section min-h-screen py-20 px-4 bg-stone-100"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-12 text-center text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Rise of Processed Foods
          </motion.h2>

          <div className="relative h-80 mb-16">
            <motion.div
              className="absolute left-0 bottom-0 w-[10%] h-12 bg-red-400 rounded-t-lg"
              initial={{ height: 12 }}
              whileInView={{ height: 80 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="absolute -top-8 left-0 text-sm font-medium">1983</p>
              <p className="absolute -bottom-8 left-0 text-sm">3%</p>
            </motion.div>

            <motion.div
              className="absolute left-[25%] bottom-0 w-[10%] h-12 bg-red-500 rounded-t-lg"
              initial={{ height: 12 }}
              whileInView={{ height: 120 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="absolute -top-8 left-0 text-sm font-medium">1999</p>
              <p className="absolute -bottom-8 left-0 text-sm">8%</p>
            </motion.div>

            <motion.div
              className="absolute left-[50%] bottom-0 w-[10%] h-12 bg-red-600 rounded-t-lg"
              initial={{ height: 12 }}
              whileInView={{ height: 180 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="absolute -top-8 left-0 text-sm font-medium">2011</p>
              <p className="absolute -bottom-8 left-0 text-sm">14%</p>
            </motion.div>

            <motion.div
              className="absolute left-[75%] bottom-0 w-[10%] h-12 bg-red-700 rounded-t-lg"
              initial={{ height: 12 }}
              whileInView={{ height: 280 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <p className="absolute -top-8 left-0 text-sm font-medium">2023</p>
              <p className="absolute -bottom-8 left-0 text-sm">26%</p>
            </motion.div>
          </div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-red-600">
              Did you know?
            </h3>
            <p className="text-lg mb-3">
              In 2023, the average Indian household spends more on cola drinks
              than on dal (pulses).
            </p>
            <p className="text-lg">
              Processed foods now account for over a quarter of the total food
              budget, becoming the largest single category.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline section */}
      <section id="timeline" className="scroll-section min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-12 text-center text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Four Decades of Transformation
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-amber-200"></div>

            {/* Timeline items */}
            {[
              {
                year: 1983,
                title: "Traditional Diet",
                content:
                  "Cereals and pulses dominated food spending, accounting for over 50% of the food budget.",
              },
              {
                year: 1999,
                title: "Early Shifts",
                content:
                  "Liberalization brings new food products. Processed food begins to appear in household budgets.",
              },
              {
                year: 2004,
                title: "Rising Incomes",
                content:
                  "As incomes rise, the share of food in total household expenditure begins to decline, following Engel's Law.",
              },
              {
                year: 2011,
                title: "Changing Tastes",
                content:
                  "Processed food spending doubles from 1999 levels. Eating out becomes more common in urban areas.",
              },
              {
                year: 2022,
                title: "Modern Diet",
                content:
                  "Processed foods become the largest category. Traditional staples now account for less than 30% of food spending.",
              },
              {
                year: 2023,
                title: "Post-Pandemic Shift",
                content:
                  "Food spending as a share of total budget increases slightly, reversing a decades-long trend.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-[50%]" : "md:pl-8 md:ml-[50%] md:mr-0"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-2">
                  <div
                    className={`absolute left-[-8px] md:left-auto ${index % 2 === 0 ? "md:right-[-8px]" : "md:left-[-8px]"} w-4 h-4 rounded-full bg-amber-500 z-10`}
                  ></div>
                  <h3 className="text-xl font-bold text-amber-700">
                    {item.year}: {item.title}
                  </h3>
                </div>
                <p className="text-stone-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion section */}
      <section
        id="conclusion"
        className="scroll-section min-h-screen py-20 px-4 bg-amber-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What's in Your Cart Today?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-stone-600 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The Indian food landscape has undergone a remarkable transformation
            over four decades. As incomes have risen and markets have opened up,
            traditional staples have given way to processed foods, convenience
            items, and eating out.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-amber-700">
                Economic Forces
              </h3>
              <p className="text-stone-600">
                As incomes rise, the share of budget spent on food typically
                falls (Engel's Law), but within food budgets, processed and
                convenience foods gain prominence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-amber-700">
                Cultural Shifts
              </h3>
              <p className="text-stone-600">
                Urbanization, working women, smaller families, and global
                influences have all contributed to changing food preferences and
                consumption patterns.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="text-lg font-medium text-amber-800">
              This visualization was created using data from the National Sample
              Survey Office (NSSO) and Household Consumption Expenditure Surveys
              (HCES).
            </p>
          </motion.div>
        </div>
      </section>

      {children}
    </div>
  );
};

export default ScrollyContainer;
