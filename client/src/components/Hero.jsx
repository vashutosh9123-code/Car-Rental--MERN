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
      className="min-h-screen flex flex-col items-center justify-center gap-14 bg-gray-200 text-center py-20 px-6 overflow-hidden"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-semibold"
      >
        {" "}
        Luxury Cars on Rent
      </motion.h1>

      <motion.form
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8 w-full">
          <div className="flex flex-col items-start gap-2">
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="outline-none font-bold"
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className=" px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : "Please Select Location"}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date" className="text-sm font-bold">Pick-up Date</label>
            <input
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              type="Date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500 outline-none"
              required
            ></input>
          </div>

          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date" className="text-sm font-bold">Return Date</label>
            <input
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="Date"
              id="return-date"
              className="text-sm text-gray-500 outline-none"
              required
            ></input>
          </div>
        </div>

        <button className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer transition-all active:scale-95">
          <img src={assets.search_icon} className="brightness-300" />
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
