import { motion } from "motion/react";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Full Insurance",
    description: "Every rental includes comprehensive insurance coverage for your peace of mind.",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "24/7 Support",
    description: "Round-the-clock customer support whenever you need assistance on the road.",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Best Prices",
    description: "Competitive pricing guaranteed. We match or beat any comparable rental price.",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Wide Selection",
    description: "From economy to luxury, we have the perfect vehicle for every occasion.",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Our Excellence</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Why Choose Our Service
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
          <p className="text-text-secondary max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            We offer premium car rental solutions tailored to your needs, ensuring a smooth and memorable journey every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-surface-light rounded-3xl p-10 border border-borderColor hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div
                className={`w-16 h-16 rounded-2xl ${feature.bg} ${feature.iconColor} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {feature.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Learn More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;