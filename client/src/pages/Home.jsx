import Banner from "../components/Banner"
import FeaturedSection from "../components/FeaturedSection"
import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"
import NewsLetter from "../components/NewsLetter"
import Testimonial from "../components/Testimonial"
import ScrollToTop from "../components/ScrollToTop"

function Home() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <WhyChooseUs />
      <Banner />
      <Testimonial />
      <NewsLetter />
      <ScrollToTop />
    </>
  )
}

export default Home