import { motion } from "motion/react";

const Title = ({ title, subTitle, align }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={align === "left" ? "text-left" : "text-center"}
    >
      <h1 className="font-bold text-3xl md:text-5xl text-gray-900 leading-tight">
        {title}
      </h1>
      {/* Gradient underline */}
      <div className={`mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-blue-400 ${align === "left" ? "" : "mx-auto"}`} />
      <p className="text-gray-500 md:text-lg mt-4 max-w-2xl leading-relaxed">
        {subTitle}
      </p>
    </motion.div>
  );
};

export default Title;
