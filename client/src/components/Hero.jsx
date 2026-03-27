import { useState, useEffect, useRef } from "react";
import { assets, cityList } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContent";
import { motion } from "motion/react";
import { toast } from "react-hot-toast";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");
 const {pickupDate,setPickupDate,returnDate,setReturnDate,navigate}=useAppContext()
  
  
  
 
 
  const handleSearch = (e) => {
    e.preventDefault()

    if (new Date(returnDate) <= new Date(pickupDate)) {
      return toast.error("Return date must be after pickup date");
    }

    navigate('/cars?pickupLocation=' + pickupLocation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate)
  }

  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center gap-16 bg-light text-center py-24 px-6 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight"
      >
        Luxury Cars on Rent
      </motion.h1>

      <motion.form
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center justify-between p-2 md:p-3 rounded-2xl md:rounded-full w-full max-w-4xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-borderColor/50"
      >
        <div className="flex flex-col md:flex-row items-center flex-1 w-full divide-y md:divide-y-0 md:divide-x divide-borderColor/50 px-4">
          <div className="flex flex-col items-center md:items-start p-4 md:px-8 w-full">
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="outline-none font-bold text-text-primary bg-transparent text-lg cursor-pointer"
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="text-xs text-text-muted font-medium mt-1 uppercase tracking-wider">
              {pickupLocation ? pickupLocation : "Select Location"}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start p-4 md:px-8 w-full">
            <label htmlFor="pickup-date" className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Pick-up Date</label>
            <input
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              type="Date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="text-lg font-bold text-text-primary outline-none cursor-pointer bg-transparent"
              required
            ></input>
          </div>

          <div className="flex flex-col items-center md:items-start p-4 md:px-8 w-full">
            <label htmlFor="return-date" className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Return Date</label>
            <input
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="Date"
              id="return-date"
              className="text-lg font-bold text-text-primary outline-none cursor-pointer bg-transparent"
              required
            ></input>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 px-10 py-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer transition-all active:scale-95 shadow-lg shadow-primary/25 font-bold md:mr-2 max-md:mt-4 max-md:w-full">
          <img src={assets.search_icon} className="brightness-300 w-5 h-5" alt="search" />
          Search
        </button>
      </motion.form>

      <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        src={assets.main_car}
        className="max-h-74 drop-shadow-2xl"
      />
    </motion.div>

    

  )
  
};

export default Hero;
