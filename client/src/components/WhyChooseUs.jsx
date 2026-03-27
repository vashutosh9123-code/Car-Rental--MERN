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
    gradient: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50",
    iconColor: "text-blue-600",
    glow: "shadow-blue-200",
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
    gradient: "from-purple-500 to-purple-600",
    lightBg: "bg-purple-50",
    iconColor: "text-purple-600",
    glow: "shadow-purple-200",
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
    gradient: "from-emerald-500 to-emerald-600",
    lightBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    glow: "shadow-emerald-200",
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
    gradient: "from-orange-500 to-orange-600",
    lightBg: "bg-orange-50",
    iconColor: "text-orange-600",
    glow: "shadow-orange-200",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Our Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Why Choose Our Service
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto" />
          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            We offer premium car rental solutions tailored to your needs, ensuring a smooth and memorable journey every time.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-3xl p-8 border border-borderColor/60 hover:border-transparent hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feature.lightBg} ${feature.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg ${feature.glow}`}>
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Bottom accent bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;