import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import whatIsAlpha from "../../assets/whatIsAlpha.png";
import "boxicons/css/boxicons.min.css"; // Import Boxicons

const WhatIsTeamAlpha = () => {
  const stats = [
    { name: "Activities", value: 12 },
    { name: "Days", value: 2 },
    { name: "Partners", value: 40 },
    { name: "Deligates", value: 200 },
  ];

  const CountUp = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const endValue = typeof end === "number" ? end : 0;
      const duration = 4000; // 4 seconds for a slower count-up
      const incrementTime = 50; // update every 50 ms

      const increment = (endValue / duration) * incrementTime;

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          clearInterval(timer);
          setCount(endValue);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, [end]);

    return <span>{count}</span>;
  };

  // Use intersection observer to start animation on scroll
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      <img
        alt=""
        src={whatIsAlpha}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        {/* Two-column layout for description and social media links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-1 gap-[200px] sm:grid-cols-2 sm:gap-32 lg:grid-cols-2"
        >
          {/* First Column: Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h2 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl font-assassin">
              what is team alpha
            </h2>
            <p className="mt-8 text-[25px] font-bold text-slate-800 sm:text-[30px] font-assassin">
              team alpha is a team-building event by the rotaract club of sliit,
              aimed at inspiring leadership, teamwork, and growth among sri
              lankan youth by combining challenging activities, professional
              insights, and lasting memories, fostering camaraderie and
              resilience.
            </p>
          </motion.div>

          {/* Second Column: Social Media Links */}
          <div className="flex flex-col space-y-4 items-end text-right mr-24">
            <a
              href="https://www.facebook.com/TeamAlpha"
              className="text-lg text-blue-600 hover:text-blue-800 flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-facebook-circle text-[50px]"></i>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/TeamAlpha"
              className="text-lg text-pink-600 hover:text-pink-800 flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram text-[50px]"></i>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/TeamAlpha"
              className="text-lg text-blue-700 hover:text-blue-900 flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin text-[50px]"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatIsTeamAlpha;
