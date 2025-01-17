import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "boxicons/css/boxicons.min.css";
import CountDown from "./CountDown";
import alphaLogo from "../../assets/alphaLogo.png";

const WhatIsTeamAlpha = () => {
  // Use intersection observer to start animation on scroll
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="relative isolate overflow-hidden bg-white text-black pt-10 pb-14"
    >
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
          className="grid grid-cols-1 gap-[70px]  sm:grid-cols-2 lg:gap-[200px] lg:grid-cols-2 mx-4 sm:mx-0"
        >
          {/* First Column: Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl font-assassin">
              what is team alpha
            </h2>
            <p className="mt-8 text-[25px] font-bold sm:text-[30px] font-assassin">
              after a five-year break, the rotaract club of sliit’s professional
              development avenue proudly revives this legacy event with a fresh
              military-themed twist. team alpha offers immersive team-building
              challenges, insightful sessions from experienced speakers, and a
              chance to grow, connect, and lead. designed for dynamic youth,
              this event blends practical life skills, leadership, and
              camaraderie. step out of your comfort zone, embrace the adventure,
              and create lasting memories with team alpha.
            </p>
          </motion.div>

          {/* Second Column: hello */}
          <motion.div className="grid grid-rows-2 gap-4 sm:test-[20px]">
            <div className="flex justify-center p-4">
              <p>
                <img src={alphaLogo} alt="team-alpha-logo" className="w-72" />
              </p>
            </div>
            <div className=" p-4">
              <p>
                <CountDown />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatIsTeamAlpha;
