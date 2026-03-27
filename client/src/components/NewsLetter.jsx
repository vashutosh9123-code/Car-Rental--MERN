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
      className="flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 mb-32 bg-surface-light rounded-[3rem] max-w-7xl mx-auto border border-borderColor/50"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">Never Miss a Deal!</h2>
        <p className="text-text-secondary text-lg mb-10">
          Subscribe to our newsletter for exclusive offers, luxury arrivals, and professional travel tips directly to your inbox.
        </p>
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full"
        >
          <div className="relative flex-1 w-full group">
            <input
              className="w-full h-14 bg-white border border-borderColor rounded-2xl px-6 text-text-primary outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-text-muted"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="h-14 px-10 text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-2xl font-bold whitespace-nowrap shadow-lg shadow-primary/20"
          >
            Join Now
          </motion.button>
        </motion.form>
      </div>
    </motion.div>

  );
};

export default NewsLetter;
