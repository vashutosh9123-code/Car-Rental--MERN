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
      className="group rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {car.isAvailable && (
          <p className="absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
            Available Now
          </p>
        )}

        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
          <span className="font-semibold">
            {currency}
            {car.pricePerDay}
          </span>
          <span className="text-sm text-white/80">/day</span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
              {car.brand} {car.model}
            </h3>
            <p className="text-gray-500 text-sm">
              {car.category} . {car.year}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-600 border-t border-gray-100 pt-4">
          <div className="flex items-center text-sm text-gray-500">
            <img src={assets.users_icon} className="h-4 mr-2"></img>
            <span>{car.seating_capacity} Seats</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <img src={assets.fuel_icon} className="h-4 mr-2"></img>
            <span>{car.fuel_type} </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <img src={assets.car_icon} className="h-4 mr-2"></img>
            <span>{car.transmission} </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <img src={assets.location_icon} className="h-4 mr-2"></img>
            <span>{car.location} </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;