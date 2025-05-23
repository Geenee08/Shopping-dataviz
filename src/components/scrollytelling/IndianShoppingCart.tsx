import React from "react";
import { Slider } from "@/components/ui/slider";

/**
 * IndianShoppingCart Component
 *
 * A data visualization component that shows the evolution of Indian household food spending
 * from 1993 to 2023, transitioning from staples to processed foods and snacks.
 */
const IndianShoppingCart: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-semibold font-instrument-sans text-black text-center md:text-left max-w-3xl mx-auto md:mx-0">
          The Changing Indian Shopping Cart
        </h1>
        <p className="text-xl md:text-2xl font-normal font-instrument-sans text-black mt-4 text-center md:text-left max-w-3xl mx-auto md:mx-0">
          How Indian household food spending shifted from staples to snacks
          between 1993 and 2023
        </p>

        {/* Shopping Cart Image */}
        <div className="relative mt-8 md:mt-16 max-w-4xl mx-auto">
          <img
            src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2xVTIwpuxAdZ6uGHpOYjBtsoSWH-1748029005160-node-24%3A62-1748029003403.png"
            alt="Empty shopping cart illustration"
            className="w-full max-w-[1433px] mx-auto"
          />
        </div>
      </section>

      {/* Nation's Diet Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold font-instrument-sans text-black mb-6">
              Nation's diet is changing
            </h2>
            <div className="text-lg md:text-2xl font-normal font-instrument-sans text-black space-y-4">
              <p>
                In 1993, Indian families spent over 20% of their food budget on
                rice and wheat. By 2023, that dropped to under 5%.
              </p>
              <p>
                At the same time, packaged snacks and beverages have doubled
                their share of the household food basket.
              </p>
              <p>
                This project visualizes these shifts using a familiar metaphor:
                a shopping cart.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2xVTIwpuxAdZ6uGHpOYjBtsoSWH-1748029007774-node-26%3A98-1748029005662.png"
              alt="Modern shopping cart filled with processed foods and snacks"
              className="w-full max-w-[511px]"
            />
          </div>
        </div>
      </section>

      {/* Explore Cart Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#f5f2df]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold font-instrument-sans text-black text-center mb-8">
            Explore Cart
          </h2>
          <p className="text-xl md:text-2xl font-normal font-instrument-sans text-black text-center max-w-3xl mx-auto mb-12">
            Use the slider below to explore changes in spending across time.
            Toggle between rural and urban India to compare trends.
          </p>

          {/* Year Slider */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="flex justify-between mb-2">
              <span className="text-xl md:text-2xl font-normal font-instrument-sans">
                1993
              </span>
              <span className="text-xl md:text-2xl font-normal font-instrument-sans">
                2023
              </span>
            </div>
            <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
          </div>

          {/* Cart Visualization */}
          <div className="flex justify-center mt-8">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2xVTIwpuxAdZ6uGHpOYjBtsoSWH-1748029002885-node-26%3A93-1748029000963.png"
              alt="Traditional food items from 1993"
              className="w-full max-w-[678px]"
            />
          </div>

          {/* Horizontal Line */}
          <div className="mt-16 border-t border-gray-300 max-w-4xl mx-auto"></div>
        </div>
      </section>

      {/* What's Changed Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold font-instrument-sans text-black mb-12">
            What's really changed?
          </h2>

          <div className="space-y-16">
            {/* Item 1 */}
            <div className="max-w-xl">
              <h3 className="text-xl md:text-2xl font-semibold font-instrument-sans text-black inline">
                The Fall of the Roti:
              </h3>
              <p className="text-xl md:text-2xl font-normal font-instrument-sans text-black inline ml-2">
                In 1993, cereals like wheat and rice dominated food budgets. Now
                they make up less than 5% in rural India.
              </p>
            </div>

            {/* Item 2 */}
            <div className="max-w-xl">
              <h3 className="text-xl md:text-2xl font-semibold font-instrument-sans text-black inline">
                Snacks on the Rise:
              </h3>
              <p className="text-xl md:text-2xl font-normal font-instrument-sans text-black inline ml-2">
                Packaged foods and beverages have nearly doubled. Convenience is
                the new king of the kitchen.
              </p>
            </div>

            {/* Item 3 */}
            <div className="max-w-xl">
              <h3 className="text-xl md:text-2xl font-semibold font-instrument-sans text-black inline">
                Urban vs Rural:
              </h3>
              <p className="text-xl md:text-2xl font-normal font-instrument-sans text-black inline ml-2">
                Urban diets are shifting even faster – spending on processed
                items is 3x higher than rural areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndianShoppingCart;
