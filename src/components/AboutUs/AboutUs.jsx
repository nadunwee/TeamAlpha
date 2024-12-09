import { motion } from "framer-motion"; // Import motion from framer-motion
import NavigationBar from "../NavigationBar";
import sliitLogo from "../../assets/sliitLogo.png";
import rotaLogo from "../../assets/rotaract.png";
import racsliitLogo from "../../assets/racsliitLogo2.png";
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
              the sri lanka institute of information technology, , is a leading
              non-state, degree-awarding institute recognized by the ugc.
              accredited by global bodies like the institution of engineering,
              technology, uk, sliit offers diverse programs in fields such as
              computing, engineering, business, and psychology. known for
              producing skilled, employable graduates, secure jobs within six
              months of graduation. beyond academics, sliit enhances students’
              soft skills through vibrant clubs like the rotaract club,
              fostering leadership and community engagement.
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
              className="rounded-lg bg-gray-100 w-[30px] sm:w-3/4 lg:w-1/2 mx-auto"
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
              rotaract is a global youth movement founded in {""}
              <seciton className="text-[25px]">1968</seciton> by rotary
              international, aimed at empowering youth to make a meaningful
              impact. across{" "}
              <span className="text-[25px] m-0 p-0 w-fit">155+</span> countries,
              rotaract fosters personal and professional growth, community
              service, and international understanding. clubs, based in
              communities or institutions, unite members through fellowship and
              a shared commitment to addressing global and local needs.
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
              className="rounded-lg bg-gray-100 w-[90px] sm:w-3/4 lg:w-1/2 mx-auto"
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
              the rotaract club of sliit , established in{" "}
              <span className="text-[25px]">2013</span>, under the rotary club
              of battaramulla, unites sliit undergraduates from diverse fields
              to serve the community. known for its impactful projects, the club
              empowers members and students alike to make a meaningful
              difference, embodying the motto “yes, i can” with a commitment to
              peace, harmony, and collaboration, the club represents the spirit
              of sliit while striving to uplift sri lankan society with honesty
              and dedication.
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
              className="rounded-lg bg-gray-100 w-[300px] sm:w-3/4 lg:w-1/2 mx-auto"
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
