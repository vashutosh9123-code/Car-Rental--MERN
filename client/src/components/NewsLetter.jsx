import { motion } from "motion/react";
import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  

 

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center space-y-4 max-md:px-4 my-24 mb-48"
    >
            <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
            <p className="md:text-lg text-gray-500/70 pb-8">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <motion.form 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-between max-w-2xl w-full h-14 bg-white rounded-full shadow-xl shadow-primary/5 border border-gray-100 overflow-hidden"
            >
                <input
                    className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <motion.button 
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    className="h-12 mr-1 px-10 text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-full font-semibold whitespace-nowrap"
                >
                    Subscribe
                </motion.button>
            </motion.form>
        </motion.div>
  );
};

export default NewsLetter;
