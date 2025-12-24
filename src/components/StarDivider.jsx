import { motion } from "framer-motion";

export default function StarDivider() {
  return (
    <motion.div
      className="star-divider"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <span className="star-symbol">✦</span>
    </motion.div>
  );
}
