import React from "react";
import { motion } from "framer-motion";

const displayVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 100,
    rotate: 0,
    transition: {
      type: "fade",
      bounce: 0.4,
      duration: 1,
      delay: 0,
    },
  },
};
export default function DisplayAnimation({ children }) {
  return (
    <motion.div
      variants={displayVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
