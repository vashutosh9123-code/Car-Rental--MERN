import { useEffect, useState } from "react";
import Title from "../components/Title";
import { assets} from "../assets/assets"
import { useAppContext } from "../context/AppContent";
import toast from "react-hot-toast";
import { motion } from "motion/react";


function MyBooking() {
  const { axios, user, currency } = useAppContext();
  const [bookings, setBookings] = useState([]);
  

  const fetchMyBookings =async()=>{
    try {
      const {data} = await axios.get('/api/bookings/user')
      if(data.success){
        setBookings(data.bookings)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
  user && fetchMyBookings()
  }, [user]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 text-sm max-w-7xl pb-20 pt-10">
      <Title title="My Bookings" subTitle="View and manage all your bookings" align="left"/>

      <div className="mt-12">
        {bookings.map((booking, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={booking._id} 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white mb-6"
          >

            <div className="md:col-span-1">
              <div className="rounded-md overflow-hidden mb-3">
                <img src={booking.car.image } className="w-full h-auto aspect-video object-cover"/>
              </div>
              <p className="text-lg font-medium mt-2">{booking.car.brand } {booking.car.model }</p>
              <p className="text-gray-500">{booking.car.year} • {booking.car.category} • {booking.car.location}</p>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <p className="px-3 py-1.5 bg-gray-50 rounded font-medium">Booking #{index + 1}</p>
                <p className={`px-3 py-1 text-xs rounded-full font-medium ${booking.status === "confirmed" ? "bg-green-100 text-green-600" :
                  "bg-red-100 text-red-600"
                }`}>{booking.status.toUpperCase()}</p>
              </div>

              <div className="flex items-start gap-2 mt-4">
                <img src={assets.calendar_icon_colored} className="w-4 h-4 mt-1"/>
                <div>
                  <p className="text-gray-500 text-xs">Rental Period</p>
                  <p className="font-medium">{new Date(booking.pickupDate).toLocaleDateString()} To {new Date(booking.returnDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-4">
                <img src={assets.location_icon_colored} className="w-4 h-4 mt-1"/>
                <div>
                  <p className="text-gray-500 text-xs">Pick-up location</p>
                  <p className="font-medium">{booking.car.location  }</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col justify-between items-end gap-6">
              <div className="text-sm text-gray-500 text-right">
                <p>Total Price</p>
                <h1 className="text-2xl font-semibold text-primary"> {currency}{booking.price}</h1>
                <p className="text-xs mt-1">Booked on { new Date(booking.createdAt).toLocaleDateString() }</p>
              </div>
            </div>

          </motion.div>
        ))}
        {bookings.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No bookings found.
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBooking;