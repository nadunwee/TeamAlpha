import { motion } from "framer-motion"; // Import motion from framer-motion
import NavigationBar from "../NavigationBar";
import sliitLogo from "../../assets/sliitLogo.png";
import rotaLogo from "../../assets/rotaract.png";
import racsliitLogo from "../../assets/racsliitLogo.png";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <div
        className="bg-cover bg-center py-8 sm:py-12 lg:py-16"
        style={{ backgroundColor: "#CDB898" }}
      >
        <NavigationBar />

        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 mt-10 sm:mt-0 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[50px] sm:text-[80px] font-bold tracking-tight text-gray-900  font-assassin">
              what is sliit
            </p>
            <p className="mt-4 text-gray-500 font-assassin text-[30px]">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <img
              alt="sliit logo"
              src={sliitLogo}
              className="rounded-lg bg-gray-100 w-full sm:w-3/4 lg:w-1/2 mx-auto"
            />
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 mt-10 sm:mt-0 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[50px] sm:text-[80px] font-bold tracking-tight text-gray-900 font-assassin">
              what is rotaract
            </h2>
            <p className="mt-4 text-gray-500 font-assassin text-[30px]">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <img
              alt="rotaract logo"
              src={rotaLogo}
              className="rounded-lg bg-gray-100 w-full sm:w-3/4 lg:w-1/2 mx-auto"
            />
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 mt-10 sm:mt-0 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[50px] sm:text-[80px] font-bold tracking-tight text-gray-900 font-assassin">
              what is racsliit
            </h2>
            <p className="mt-4 text-gray-500 font-assassin text-[30px]">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <img
              alt="rotaract logo"
              src={racsliitLogo}
              className="rounded-lg bg-gray-100 w-full sm:w-3/4 lg:w-1/2 mx-auto"
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
