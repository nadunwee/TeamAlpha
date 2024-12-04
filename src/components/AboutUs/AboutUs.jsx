import { motion } from "framer-motion"; // Import motion from framer-motion
import NavigationBar from "../NavigationBar";
import sliitLogo from "../../assets/sliitLogo.png";

const AboutUs = () => {
  return (
    <div
      className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      style={{ backgroundColor: "#CDB898" }}
    >
      <NavigationBar />

      {/* First Section */}
      <motion.div
        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* First Column: Description */}
        <div className="lg:col-span-1 flex items-center justify-center">
          <div className="lg:max-w-lg text-center">
            <motion.h1
              className="mt-2 text-pretty text-[70px] font-semibold tracking-tight text-gray-900 sm:text-[70px] font-assassin text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              what is sliit
            </motion.h1>
            <motion.p
              className="text-[30px] font-assassin text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              sri lanka institute of information technology is a private
              university located in malabe and colombo, sri lanka. t specializes
              in various fields like technology and management.
            </motion.p>
          </div>
        </div>

        {/* Second Column: Image */}
        <motion.div
          className="lg:col-span-1 flex items-center justify-center"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            alt="SLIIT Logo"
            src={sliitLogo}
            className="h-[250px] max-w-[250px] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
