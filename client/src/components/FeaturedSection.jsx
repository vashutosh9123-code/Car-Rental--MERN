import { motion } from "motion/react";
import { useState } from "react";
import Title from "./Title";
import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContent";
import { assets } from "../assets/assets";

const FeaturedSection = () => {
  const navigate = useNavigate();
  const { cars } = useAppContext();

  return (
    <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-light/40">
      <Title
        title="Featured Vehicles"
        subTitle="Explore our selection of premium vehicles available for your next adventure"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full max-w-7xl">
        {cars.slice(0, 6).map((car, index) => (
          <CarCard key={car._id} car={car} index={index} />
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          navigate("/cars");
          window.scrollTo(0, 0);
        }}
        className="flex items-center justify-center gap-2.5 px-10 py-3.5 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white text-primary rounded-full mt-16 cursor-pointer font-semibold transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:shadow-lg"
      >
        Explore all cars
        <img src={assets.arrow_icon} className="group-hover:brightness-0 group-hover:invert w-4" />
      </motion.button>
    </div>
  );
};

export default FeaturedSection;