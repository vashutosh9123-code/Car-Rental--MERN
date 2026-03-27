import { motion } from "motion/react";

const Title = ({ title, subTitle, align }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      >
      <h1 className="font-bold text-3xl md:text-5xl text-text-primary leading-tight">{title}</h1>
      <p className="text-text-secondary md:text-lg mt-4 max-w-2xl leading-relaxed">{subTitle}</p>
    </motion.div>
  );
};

export default Title;
