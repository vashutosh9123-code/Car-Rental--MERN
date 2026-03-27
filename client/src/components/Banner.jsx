import { motion } from "motion/react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContent";

const Banner = () => {
  const navigate = useNavigate();
  const { isOwner } = useAppContext();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row md:items-center items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-r from-primary via-blue-600 to-blue-500 max-w-7xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl my-24 border border-white/10"
    >
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white flex-1"
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">Do You Own a Luxury Car?</h2>
        <p className="mt-4 text-white/90 text-lg font-medium">Monetize your vehicle by listing it on CarRental</p>
        <p className="mt-2 text-white/80 max-w-md">We take care of insurance, driver verification, and secure payments so you can earn passive income stress-free.</p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(isOwner ? '/owner' : '/owner/add-car')}
          className="px-8 py-3 bg-white hover:bg-gray-50 transition-all text-primary rounded-full font-bold mt-8 shadow-lg shadow-black/10 flex items-center gap-2"
        >
          List your car
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-12 md:mt-0"
      >
        <img src={assets.banner_car_image} className="max-h-56 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]" alt="Banner Car" />
      </motion.div>
    </motion.div>
  );
};

export default Banner;