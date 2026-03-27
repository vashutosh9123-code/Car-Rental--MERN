import { assets, cityList } from "../assets/assets";
import { useAppContext } from "../context/AppContent";
import { motion } from "motion/react";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const { pickupDate, setPickupDate, returnDate, setReturnDate, navigate } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault()
    if (new Date(returnDate) <= new Date(pickupDate)) {
      return toast.error("Return date must be after pickup date");
    }
    navigate('/cars?pickupLocation=' + pickupLocation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate)
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gap-10 text-center py-24 px-6 overflow-hidden bg-light">

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-blue-400/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-gradient-to-tl from-blue-300/15 to-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary/20 text-primary font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md shadow-primary/10"
      >
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        Premium Car Rental Service
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          <span className="text-gray-900">Luxury Cars</span>
          <br />
          <span className="gradient-text">on Rent</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Choose from our premium fleet and experience the road like never before.
        </p>
      </motion.div>

      {/* Search Form */}
      <motion.form
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center justify-between p-2 md:p-2 rounded-2xl md:rounded-full w-full max-w-4xl bg-white shadow-[0_20px_60px_rgba(37,99,235,0.12)] border border-borderColor/60 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center flex-1 w-full divide-y md:divide-y-0 md:divide-x divide-borderColor/50 px-4">
          {/* Pickup Location */}
          <div className="flex flex-col items-start gap-1 p-4 md:px-6 w-full">
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="outline-none font-bold text-gray-800 bg-transparent cursor-pointer w-full"
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <p className="text-sm text-gray-500 px-0.5">
              {pickupLocation ? pickupLocation : "Please Select Location"}
            </p>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col items-start gap-1 p-4 md:px-6 w-full">
            <label htmlFor="pickup-date" className="text-sm font-bold text-gray-800">Pick-up Date</label>
            <input
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              type="Date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500 outline-none cursor-pointer bg-transparent"
              required
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col items-start gap-1 p-4 md:px-6 w-full">
            <label htmlFor="return-date" className="text-sm font-bold text-gray-800">Return Date</label>
            <input
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="Date"
              id="return-date"
              className="text-sm text-gray-500 outline-none cursor-pointer bg-transparent"
              required
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-blue-500 hover:from-primary-dull hover:to-primary text-white rounded-full cursor-pointer transition-all shadow-lg shadow-primary/30 font-bold md:mr-2 max-md:mt-4 max-md:w-full"
        >
          <img src={assets.search_icon} className="brightness-[10] w-4 h-4" alt="search" />
          Search
        </motion.button>
      </motion.form>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="flex items-center gap-8 md:gap-12 z-10"
      >
        {[
          { value: "500+", label: "Cars Available" },
          { value: "50K+", label: "Happy Customers" },
          { value: "4.9★", label: "Rating" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-xl md:text-2xl font-bold gradient-text">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Car Image */}
      <motion.img
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        src={assets.main_car}
        className="max-h-72 drop-shadow-[0_30px_60px_rgba(37,99,235,0.2)] animate-float z-10"
      />
    </div>
  );
};

export default Hero;
