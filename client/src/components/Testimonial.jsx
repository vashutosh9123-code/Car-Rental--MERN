import { motion } from 'motion/react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {

  const testimonials = [
        {  name: "Emma Rodriguez",
           location: "Barcelona, Spain",
            image: assets.testimonial_image_1,
             testimonial: "I've rented cars from various companies, but the experience with CarRental is exceptional." },

        {  name: "Liam Johnson", 
          location: "New York, USA",
           image: assets.testimonial_image_2, 
            testimonial: "CarRental made my trip so much eassier. The car was delivered right to my door, and the customer service is fantastic" },
        {  name: "Sophia Lee",
           location: "Seoul, South Korea", 
           image: assets.testimonial_image_1,
           testimonial: "I higly Recommend  CarRental! Their fleet is amazing, and I always feels like I;m geeting the best the best deal with excellent service" }
    ];

  return (
    
     < div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            <Title title= "What our Customers Say" subTitle="Discover why descering travelers choose StayVenture for their luxury accomodation around the world"/>

            <div className="flex flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {testimonials.map((testimonial,index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index} 
                        className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-500 cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className=" text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, i) => (
                              <img key={i} src={assets.star_icon} alt='star-icon'/>
                                
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
    
  )
}

export default Testimonial;
