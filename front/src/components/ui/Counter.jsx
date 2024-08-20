import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Counter({ endValue, symbol, speed = 10 }) {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !isCounting) {
      setIsCounting(true);
    }
  }, [inView, isCounting]);

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < endValue) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return endValue;
          }
        });
      }, speed);
      return () => clearInterval(interval);
    }
  }, [isCounting, endValue]);

  return (
    <motion.span
      ref={ref}
      animate={{ controls, opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {count}
      {count === endValue && symbol}
    </motion.span>
  );
}
