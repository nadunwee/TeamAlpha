import { motion } from "framer-motion";
import DrivingForce from "../DrivingForce";
import NavigationBar from "../NavigationBar";
import HomePagePartners from "./HomePagePartners";
import WhatIsTeamAlpha from "./WhatIsTeamAlpha";
import backgroundImg from "../../assets/newback.webp";
import { useEffect, useState } from "react";
import CountDown from "./CountDown";
import Footer from "../Footer/Footer";
import PastEvents from "./PastEvents";
import bluredImg from "../../assets/bluredImg.png";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-white"
      >
        <motion.div
          className="relative isolate px-6 pt-14 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ffc2] to-[#df446b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </motion.div>

          <motion.div
            className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <motion.div
              className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Announcing our Merch Packk{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Get it now <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          </div> */}

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-balance text-6xl font-semibold tracking-tight text-black sm:text-[80px] font-assassin">
                the creed is calling… <br />
                will you heed it
              </h1>

              {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                whileHover={{ scale: 1.05 }}
              >
                Register
              </motion.a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
            </motion.div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </motion.div>
          {/* <img src={bluredImg} alt="" /> */}
        </motion.div>
        {/* <CountDown /> */}
        {/* <HomePagePartners /> */}
        <PastEvents />
      </div>
      <WhatIsTeamAlpha />
      <Footer />
    </>
  );
}
