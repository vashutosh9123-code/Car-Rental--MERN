import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBooking from './pages/MyBooking'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/addCar'
import ManageCar from './pages/owner/ManageCar'
import ManageBooking from './pages/owner/ManageBooking'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContent'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'

function App() {
  const { showLogin } = useAppContext()
  const location = useLocation()
  const isOwnerPath = location.pathname.startsWith('/owner')

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div >
      <Toaster/>

      <AnimatePresence>
        {showLogin && <Login />}
      </AnimatePresence>
      {!isOwnerPath && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.5}}>
              <Home />
            </motion.div>
          } />
          <Route path='/car-details/:id' element={
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.5}}>
              <CarDetails />
            </motion.div>
          } />
          <Route path='/cars' element={
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.5}}>
              <Cars />
            </motion.div>
          } />
          <Route path='/my-bookings' element={
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.5}}>
              <MyBooking />
            </motion.div>
          } />

          <Route path='/owner' element={<Layout />}>
            <Route index element={
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
                <Dashboard />
              </motion.div>
            } />
            <Route path='add-car' element={
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
                <AddCar />
              </motion.div>
            } />
            <Route path='manage-cars' element={
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
                <ManageCar />
              </motion.div>
            } />
            <Route path='manage-bookings' element={
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
                <ManageBooking />
              </motion.div>
            } />
          </Route>
        </Routes>
      </AnimatePresence>

      {!isOwnerPath && <Footer />}
    </div>
  )
}

export default App
