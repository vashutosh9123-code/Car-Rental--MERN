import { motion } from "motion/react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car, index = 0, variant = "default" }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => {
        navigate(`/car-details/${car._id}`);
        window.scrollTo(0, 0);
      }}
      className="group rounded-3xl overflow-hidden border border-borderColor bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={`${car.brand} ${car.model}`}
        />

        {car.isAvailable && (
          <div className="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg">
            Available
          </div>
        )}

        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-text-primary px-4 py-2 rounded-2xl shadow-xl flex items-baseline gap-1">
          <span className="font-bold text-lg">
            {currency}{car.pricePerDay}
          </span>
          <span className="text-xs text-text-secondary font-medium">/day</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
            {car.brand} {car.model}
          </h3>
          <p className="text-text-secondary text-sm font-medium mt-1">
            {car.category} • {car.year}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-borderColor pt-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-light flex items-center justify-center">
              <img src={assets.users_icon} className="h-4 opacity-70" alt="seats" />
            </div>
            <span className="text-xs font-semibold text-text-secondary">{car.seating_capacity} Seats</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-light flex items-center justify-center">
              <img src={assets.fuel_icon} className="h-4 opacity-70" alt="fuel" />
            </div>
            <span className="text-xs font-semibold text-text-secondary">{car.fuel_type}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-light flex items-center justify-center">
              <img src={assets.car_icon} className="h-4 opacity-70" alt="transmission" />
            </div>
            <span className="text-xs font-semibold text-text-secondary">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-light flex items-center justify-center">
              <img src={assets.location_icon} className="h-4 opacity-70" alt="location" />
            </div>
            <span className="text-xs font-semibold text-text-secondary text-nowrap overflow-hidden text-ellipsis">{car.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;