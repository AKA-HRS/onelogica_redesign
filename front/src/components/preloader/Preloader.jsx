import React, { useEffect, useState } from "react";
import "./preloader.css";
export default function Preloader() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 50); // Updates every 20ms to reach 100% in 2 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="bg-black w-screen h-screen">
      <div className="wrapper">
        <div className="box-wrap">
          <div className="box one"></div>
          <div className="box two"></div>
          <div className="box three"></div>
          <div className="box four"></div>
          <div className="box five"></div>
          <div className="box six"></div>
        </div>
      </div>
      <div className="preloader">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
        <div className="percentage">{percentage}%</div>
      </div>
    </div>
  );
}
