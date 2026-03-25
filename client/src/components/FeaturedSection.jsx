import { motion } from "motion/react";
import { useState } from "react";
import Title from "./Title";

import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContent";
import { assets,  } from "../assets/assets";



const FeaturedSection = () => {
  const navigate = useNavigate();
  const {cars} = useAppContext();



  return (
    <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">

      <div>
        <Title title="Featured vehicles" subTitle="Explore our selection of premium vehicles available for your next adventure" />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
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
        className="flex items-center justify-center gap-2 px-8 py-3 border border-gray-200 hover:bg-gray-50 rounded-full mt-18 cursor-pointer font-medium transition-all shadow-sm"
      >
        Explore all cars <img src={assets.arrow_icon} />
      </motion.button>

    </div>
  );
};

export default FeaturedSection;