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
      className="group rounded-3xl overflow-hidden bg-white border border-borderColor/60 hover:border-primary/20 hover:shadow-[0_24px_64px_rgba(37,99,235,0.12)] transition-all duration-500 cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100">
        <img
          src={car.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={`${car.brand} ${car.model}`}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Availability badge */}
        {car.isAvailable && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-emerald-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Available
          </div>
        )}

        {/* Price badge */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2 rounded-2xl shadow-xl flex items-baseline gap-1 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <span className="font-bold text-lg">{currency}{car.pricePerDay}</span>
          <span className="text-[11px] opacity-70 font-medium">/day</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {car.brand} {car.model}
          </h3>
          <p className="text-xs text-gray-400 font-medium mt-0.5 uppercase tracking-wide">
            {car.category} · {car.year}
          </p>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-3 border-t border-borderColor/60 pt-4">
          {[
            { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
            { icon: assets.fuel_icon, text: car.fuel_type },
            { icon: assets.car_icon, text: car.transmission },
            { icon: assets.location_icon, text: car.location },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <img src={icon} className="h-3.5 opacity-60" alt="" />
              </div>
              <span className="text-[11px] font-semibold text-gray-500 truncate">{text}</span>
            </div>
          ))}
        </div>

        {/* View details link */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider bg-blue-50 rounded-xl py-2">
            View Details
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;